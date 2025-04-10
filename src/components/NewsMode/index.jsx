import React from "react";

import { Sidebar } from "components/commons";
import Header from "components/commons/Header";

const NewsMode = () => (
  <div className="flex h-screen ">
    <Sidebar />
    <div className="w-full">
      <Header title="News mode" />
    </div>
  </div>
);

export default NewsMode;
