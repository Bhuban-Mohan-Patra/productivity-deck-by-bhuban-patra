import React, { useState } from "react";

import { Delete } from "@bigbinary/neeto-icons";
import { Alert, Button, Input, Typography } from "neetoui";

const Column = ({ title }) => {
  const [inputTask, setInputTask] = useState("");
  const [isAddTask, setIsAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [currentIndexToDelete, setCurrentIndexToDelete] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = () => {
    setIsAddTask(true);
  };

  const handleEnterClick = () => {
    if (inputTask.trim() === "") {
      alert("Enter task");
    } else {
      setTasks([...tasks, inputTask.trim()]);
      setIsAddTask(false);
      setInputTask("");
    }
  };

  const handleDeleteTaskClick = id => {
    setCurrentIndexToDelete(id);
    setIsDeleteAlertOpen(true);
  };

  const handleConfirmDeleteTask = () => {
    setTasks(tasks.filter((_, index) => index !== currentIndexToDelete));
    setIsDeleteAlertOpen(false);
  };

  return (
    <div className="flex w-80 flex-col rounded border border-black bg-white p-4">
      <Typography className="font-semibold">{title}</Typography>
      <div className="mt-6 flex flex-1 flex-col gap-2">
        {tasks.map((task, index) => (
          <div
            className="flex justify-between rounded-md border px-2 py-1 text-lg"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {task}
            {hoveredIndex === index && (
              <Delete
                className="cursor-pointer"
                onClick={() => handleDeleteTaskClick(index)}
              />
            )}
          </div>
        ))}
        {isAddTask && (
          <Input
            placeholder="Enter task"
            type="text"
            value={inputTask}
            onChange={event => setInputTask(event.target.value)}
            onKeyDown={event => event.key === "Enter" && handleEnterClick()}
          />
        )}
      </div>
      <Button
        className="mt-4 justify-center rounded py-2 text-sm"
        disabled={isAddTask}
        label="Add new task +"
        style="text"
        onClick={handleClick}
      />
      <Alert
        cancelButtonLabel="Cancel"
        closeOnOutsideClick={false}
        isOpen={isDeleteAlertOpen}
        message="Are you want to delete task"
        submitButtonLabel="Delete"
        title="Delete task"
        onClose={() => setIsDeleteAlertOpen(false)}
        onSubmit={handleConfirmDeleteTask}
      />
    </div>
  );
};

export default Column;
