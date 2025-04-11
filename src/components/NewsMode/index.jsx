import React, { useEffect, useState } from "react";

import { Search } from "@bigbinary/neeto-icons";
import newsApi from "apis/news";
import { Sidebar } from "components/commons";
import Header from "components/commons/Header";
import { Input } from "neetoui";

const NewsMode = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const response = await newsApi.fetch();
    setNews(response.articles);
  };

  useEffect(() => {
    fetchNews();
  }, []);

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
