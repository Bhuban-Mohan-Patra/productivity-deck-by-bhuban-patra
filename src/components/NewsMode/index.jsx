import React, { useState } from "react";

import { Search } from "@bigbinary/neeto-icons";
import { Sidebar, Header } from "components/commons";
import { Input } from "neetoui";

import Card from "./Card";

const NewsMode = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // const debounceValue = useDebounce(searchTerm);

  // const { data: { articles: news = [] } = {} } = useFetchNewsApi(debounceValue);
  const news = [{ id: 1 }, { id: 2 }];

  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="w-full">
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
        />
        <div className=" bg-red-400">
          <div className="mt-10 h-4/5 bg-green-300 px-10">
            {news.map(newsItem => (
              <Card key={newsItem.title} />
            ))}
          </div>
          <div className="flex justify-end px-10">Pagination</div>
        </div>
      </div>
    </div>
  );
};

export default NewsMode;
