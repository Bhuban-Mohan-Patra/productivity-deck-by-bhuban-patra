import { create } from "zustand";
import { persist } from "zustand/middleware";

const useKanbanStore = create(
  persist(
    set => ({
      columns: {
        Todo: [],
        "In progress": [],
        Done: [],
      },
      setColumns: newColumns => set({ columns: newColumns }),
    }),
    {
      name: "kanban-storage",
    }
  )
);

export default useKanbanStore;
