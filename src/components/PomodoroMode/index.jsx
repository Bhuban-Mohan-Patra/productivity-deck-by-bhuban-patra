import React, { useEffect, useState } from "react";

import { Play } from "@bigbinary/neeto-icons";
import { Sidebar, Header } from "components/commons";
import { Button } from "neetoui";

import { SESSIONS, SESSIONS_ORDER } from "./constants";

const PomodoroMode = () => {
  const [sessionIndex, setSessionIndex] = useState(0);
  const [timerSession, setTimerSession] = useState(
    SESSIONS_ORDER[sessionIndex]
  );

  const [timer, setTimer] = useState(SESSIONS.Pomodoro.duration);
  const [isRunning, setIsRunning] = useState(false);

  const handleClick = () => {
    setIsRunning(prevState => !prevState);
  };

  const switchStage = nextStage => {
    setIsRunning(false);
    setTimerSession(nextStage);
    setTimer(SESSIONS[nextStage].duration);
  };

  const handleCycleStage = () => {
    const nextIndex = (sessionIndex + 1) % SESSIONS_ORDER.length;
    const nextStage = SESSIONS_ORDER[nextIndex];

    setIsRunning(false);
    setSessionIndex(nextIndex);
    setTimerSession(nextStage);
    setTimer(SESSIONS[nextStage].duration);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimer(SESSIONS[timerSession].duration);
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
          <div className="flex h-3/5 w-1/3 flex-col items-center justify-center gap-20 rounded-md border border-black">
            <div className="flex justify-center gap-3 space-x-4">
              {Object.keys(SESSIONS).map(session => (
                <Button
                  key={session}
                  style="tertiary"
                  className={`border  px-4 py-2 font-semibold ${
                    session === timerSession ? "bg-gray-200" : ""
                  }`}
                  onClick={() => switchStage(session)}
                >
                  {session}
                </Button>
              ))}
            </div>
            <div className="text-8xl font-bold">{formatedTimer}</div>
            <div className="mb-1 flex items-center gap-3">
              <Button
                label={isRunning ? "Pause" : "Start"}
                size="large"
                style="secondary"
                onClick={handleClick}
              />
              <Button
                label="Reset"
                size="large"
                style="secondary"
                onClick={handleReset}
              />
              {isRunning && (
                <Play
                  className="cursor-pointer"
                  color="#1e1e20"
                  size={32}
                  onClick={handleCycleStage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PomodoroMode;
