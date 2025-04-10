import React from "react";

import { Sidebar } from "components/commons";
import Header from "components/commons/Header";

const KanbanMode = () => (
  <div className="flex h-screen ">
    <Sidebar />
    <div className="w-full bg-red-200 ">
      <Header title="Kanban mode" />
    </div>
  </div>
);

export default KanbanMode;
