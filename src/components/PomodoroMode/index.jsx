import React from "react";

import { Sidebar } from "components/commons";
import Header from "components/commons/Header";

const PomodoroMode = () => (
  <div className="flex h-screen ">
    <Sidebar />
    <div className="w-full">
      <Header title="Pomodoro mode" />
      <div className="mt-4 flex h-4/5 items-center justify-center">
        <div className="flex flex-col items-center rounded-md border border-black">
          <div className="flex justify-center space-x-4">Pomodoro</div>
          <div>timer</div>
          <div className="flex gap-1">start</div>
        </div>
      </div>
    </div>
  </div>
);
export default PomodoroMode;
