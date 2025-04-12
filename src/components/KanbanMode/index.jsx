import React from "react";

import { DragDropContext } from "@hello-pangea/dnd";
import { Sidebar, Header } from "components/commons";
import { useTranslation } from "react-i18next";
import useKanbanStore from "stores/useKanbanStore";

import Column from "./Column";

const KanbanMode = () => {
  const { columns, setColumns } = useKanbanStore();

  const { t } = useTranslation();

  const handleDragEnd = result => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn = source.droppableId;
    const destinationColumn = destination.droppableId;

    const sourceTasks = [...columns[sourceColumn]];
    const [removed] = sourceTasks.splice(source.index, 1);

    const destinationTasks = [...columns[destinationColumn]];
    destinationTasks.splice(destination.index, 0, removed);

    setColumns({
      ...columns,
      [sourceColumn]: sourceTasks,
      [destinationColumn]: destinationTasks,
    });
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full">
        <Header title={t("kanban.kanbanMode")} />
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="mx-4 mt-20 flex h-3/4 justify-center gap-8 px-4">
            {Object.entries(columns).map(([title, tasks]) => (
              <Column
                columns={columns}
                key={title}
                setColumns={setColumns}
                tasks={tasks}
                title={title}
              />
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default KanbanMode;
