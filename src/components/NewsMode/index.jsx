import React, { useState } from "react";

import {
  MenuHorizontal,
  Search,
  Filter as FilterIcon,
} from "@bigbinary/neeto-icons";
import { Sidebar, Header, EmptyPage } from "components/commons";
import useFetchNewsApi from "hooks/reactQuery/useNewsApi";
import useDebounce from "hooks/useDebounce";
import { Input, Pagination } from "neetoui";

import Card from "./Card";
import ChangeSource from "./ChangeSource";
import Filter from "./Filter";
import FilterBar from "./FilterBar";

const NewsMode = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const debounceValue = useDebounce(searchTerm);

  const { data: { articles: news = [], totalResults } = {} } = useFetchNewsApi(
    debounceValue,
    currentPage
  );
  // const news = [{ id: 1 }, { id: 2 }];

  const handlePageNavigation = page => {
    console.log("Navigating to page:", page);
    setCurrentPage(page);
  };
  // history.push(buildUrl(routes.root, mergeLeft({ page }, queryParams)));

  const handleSourceClick = () => {
    setIsOpenModal(true);
  };

  const handleFilterClick = () => {
    setIsOpenFilter(true);
  };

  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="w-full px-10">
        <Header
          title="News mode"
          actionBlock={
            <Input
              placeholder="Search for articles"
              suffix={<Search />}
              type="search"
              value={searchTerm}
              // onChange={(event) => setSearchTerm(event.target.value)}
              onChange={event => {
                const {
                  target: { value },
                } = event;
                setSearchTerm(value);
                // debouncedSearchKey(value);
              }}
            />
          }
          changeSourceButton={
            <div className="cursor-pointer" onClick={handleSourceClick}>
              <MenuHorizontal />
            </div>
          }
          filterButton={
            <div className="cursor-pointer" onClick={handleFilterClick}>
              <FilterIcon />
            </div>
          }
        />
        {news.length === 0 ? (
          <EmptyPage text="No news to show" />
        ) : (
          <div className=" mt-6 h-5/6 ">
            <div className="flex justify-start px-10 py-1">
              <FilterBar />
            </div>
            <div className="mt-16 h-5/6  px-10">
              {news.map(newsItem => (
                <Card key={newsItem.title} />
              ))}
            </div>
            <div className="flex justify-end px-10 py-2">
              <Pagination
                count={totalResults}
                navigate={handlePageNavigation}
                pageNo={currentPage || 1}
                pageSize={10}
              />
            </div>
          </div>
        )}
        {isOpenModal && (
          <ChangeSource
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
          />
        )}
        {isOpenFilter && (
          <Filter
            isOpenFilter={isOpenFilter}
            setIsOpenFilter={setIsOpenFilter}
          />
        )}
      </div>
    </div>
  );
};

export default NewsMode;
