import React from "react";

import { Sidebar } from "components/commons";
import Header from "components/commons/Header";

const PomodoroMode = () => (
  <div className="flex h-screen ">
    <Sidebar />
    <div className="w-full">
      <Header title="Pomodoro mode" />
    </div>
  </div>
);

export default PomodoroMode;
