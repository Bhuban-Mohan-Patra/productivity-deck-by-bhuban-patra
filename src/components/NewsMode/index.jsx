import React, { useEffect, useState } from "react";

import newsApi from "apis/news";
import { Sidebar } from "components/commons";
import Header from "components/commons/Header";

const NewsMode = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const response = await newsApi.show();
    setNews(response.articles);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="w-full">
        <Header title="News mode" />
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
