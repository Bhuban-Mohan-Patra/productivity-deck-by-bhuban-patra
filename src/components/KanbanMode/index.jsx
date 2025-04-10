import React from "react";

import { Sidebar } from "components/commons";
import Header from "components/commons/Header";

import Column from "./Column";

const KanbanMode = () => (
  <div className="flex h-screen ">
    <Sidebar />
    <div className="w-full">
      <Header title="Kanban mode" />
      <div className="mx-4 mt-20 flex h-3/4 justify-center gap-8 px-4">
        <Column title="Todo" />
        <Column title="In proress" />
        <Column title="Done" />
      </div>
    </div>
  </div>
);

export default KanbanMode;
