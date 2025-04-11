import React, { useState } from "react";

import { Search } from "@bigbinary/neeto-icons";
import { Sidebar } from "components/commons";
import Header from "components/commons/Header";
import { useFetchNews } from "hooks/reactQuery/useNewsApi";
import useDebounce from "hooks/useDebounce";
import { Input } from "neetoui";

const NewsMode = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchKey = useDebounce(searchTerm);

  const newsParams = {
    searchTerm: debouncedSearchKey,
  };

  const { data: { articles: news = [] } = {} } = useFetchNews(newsParams);

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
              onChange={event => setSearchTerm(event.target.value)}
            />
          }
        />
        <div>
          {news.map(newsItem => (
            <li key={newsItem.source.id}>{newsItem.title}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsMode;
