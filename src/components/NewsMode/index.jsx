import { Sidebar } from "components/commons";

import Header from "./Header";
import List from "./List";

const NewsMode = () => (
  <div className="flex h-screen w-screen">
    <Sidebar />
    <div className="flex h-full w-full flex-col">
      <Header />
      <div className="bg-background flex flex-1 flex-col space-y-4 overflow-y-auto p-4 md:col-span-2 lg:col-span-3">
        <List />
      </div>
    </div>
  </div>
);

export default NewsMode;
