import React, { useEffect, useState } from "react";

import { Sidebar } from "components/commons";
import Header from "components/commons/Header";
import { Button } from "neetoui";

const PomodoroMode = () => {
  const [timer, setTimer] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  const handleClick = () => {
    setIsRunning(prevState => !prevState);
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimer(prevTimer => {
          if (timer < 1) {
            clearInterval(interval);

            return 0;
          }

          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const formatedTimer = `${minutes < 10 ? "0" : ""}${minutes} : ${
    seconds < 10 ? "0" : ""
  }${seconds}`;

  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="w-full">
        <Header title="Pomodoro mode" />
        <div className="mt-4 flex h-4/5 items-center justify-center">
          <div className="flex flex-col items-center rounded-md border border-black">
            <div className="flex justify-center space-x-4">Pomodoro</div>
            <div>{formatedTimer}</div>
            <div className="flex gap-1">
              <Button
                label={isRunning ? "Pause" : "Start"}
                style="primary"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PomodoroMode;
