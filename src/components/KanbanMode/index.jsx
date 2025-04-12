import React, { useState } from "react";

import { Delete } from "@bigbinary/neeto-icons";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import classNames from "classnames";
import { Alert, Button, Input, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

const Column = ({ title, tasks, setColumns, columns }) => {
  const [inputTask, setInputTask] = useState("");
  const [isAddTask, setIsAddTask] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [currentIndexToDelete, setCurrentIndexToDelete] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const { t } = useTranslation();

  const handleClick = () => {
    setIsAddTask(true);
  };

  const handleEnterClick = () => {
    if (inputTask.trim() !== "") {
      setColumns({
        ...columns,
        [title]: [...tasks, inputTask.trim()],
      });
      setIsAddTask(false);
      setInputTask("");
    }
  };

  const handleDeleteTaskClick = id => {
    setCurrentIndexToDelete(id);
    setIsDeleteAlertOpen(true);
  };

  const handleConfirmDeleteTask = () => {
    const newTasks = tasks.filter((_, index) => index !== currentIndexToDelete);
    setColumns({
      ...columns,
      [title]: newTasks,
    });
    setIsDeleteAlertOpen(false);
  };

  return (
    <div className="flex w-80 flex-col rounded border border-black bg-white p-4">
      <Typography className="font-semibold">{title}</Typography>
      <Droppable droppableId={title}>
        {provided => (
          <div
            className="mt-6 flex flex-1 flex-col gap-2"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable
                draggableId={`${title}-${index}`}
                index={index}
                key={`${title}-${index}`}
              >
                {provided => (
                  <div
                    ref={provided.innerRef}
                    className={classNames(
                      "flex justify-between rounded-md border px-2 py-1 text-lg",
                      {
                        "line-through": title === "Done",
                      }
                    )}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
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
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            {isAddTask && (
              <Input
                placeholder={t("kanban.enterTask")}
                type="text"
                value={inputTask}
                onChange={event => setInputTask(event.target.value)}
                onKeyDown={event => event.key === "Enter" && handleEnterClick()}
              />
            )}
          </div>
        )}
      </Droppable>
      <Button
        className="mt-4 justify-center rounded py-2 text-sm"
        disabled={isAddTask}
        label={t("kanban.addNewTask")}
        style="text"
        onClick={handleClick}
      />
      <Alert
        cancelButtonLabel={t("common.cancel")}
        closeOnOutsideClick={false}
        isOpen={isDeleteAlertOpen}
        message={t("kanban.deleteTaskMessage")}
        submitButtonLabel={t("common.delete")}
        title={t("kanban.deleteTaskTitle")}
        onClose={() => setIsDeleteAlertOpen(false)}
        onSubmit={handleConfirmDeleteTask}
      />
    </div>
  );
};

export default Column;
