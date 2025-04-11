// import React from "react";
// import { DragDropContext } from "@hello-pangea/dnd";

// import { Sidebar } from "components/commons";
// import Header from "components/commons/Header";

// import Column from "./Column";

// const KanbanMode = () => (
//   <div className="flex h-screen ">
//     <Sidebar />
//     <div className="w-full">
//       <Header title="Kanban mode" />
//       <div className="mx-4 mt-20 flex h-3/4 justify-center gap-8 px-4">
//         <Column title="Todo" />
//         <Column title="In proress" />
//         <Column title="Done" />
//       </div>
//     </div>
//   </div>
// );

// export default KanbanMode;

import React, { useState } from "react";

import { DragDropContext } from "@hello-pangea/dnd";
import { Sidebar, Header } from "components/commons";

import Column from "./Column";

const initialData = {
  Todo: ["Task 1", "Task 2"],
  "In progress": ["Task 3"],
  Done: ["Task 4"],
};

const KanbanMode = () => {
  const [columns, setColumns] = useState(initialData);

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

    console.log("result", result);
    console.log("sourceCol", sourceColumn);
    console.log("columns", columns);
    console.log("columns[sourceCol]", columns[sourceColumn]);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full">
        <Header title="Kanban mode" />
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
