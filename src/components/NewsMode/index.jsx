import React, { useState } from "react";

import { Search } from "@bigbinary/neeto-icons";
import { Sidebar } from "components/commons";
import Header from "components/commons/Header";
import { useFetchNews } from "hooks/reactQuery/useNewsApi";
import { Input } from "neetoui";

const NewsMode = () => {
  // const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // const fetchNews = async () => {
  //   const response = await newsApi.fetch();
  //   setNews(response.articles);
  // };

  // useEffect(() => {
  //   fetchNews();
  // }, []);

  const newsParams = {
    searchTerm,
  };

  // const { data: { articles: news = [], totalResults } = {}, isLoading } =
  //   useFetchNews(newsParams);
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
