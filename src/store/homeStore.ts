import { create } from "zustand";

type HomeStore = {
  // состояние
  selectedSector: string | null;
  selectedKeyFunction: string | null;
  searchQuery: string;

  // actions
  setSelectedSector: (id: string | null) => void;
  setSelectedKeyFunction: (id: string | null) => void;
  setSearchQuery: (query: string) => void;

  // reset
  reset: () => void;
};

export const useHomeStore = create<HomeStore>((set) => ({
  // Начальное состояние
  selectedSector: null,
  selectedKeyFunction: null,
  searchQuery: "", // для запросов (с debounce)

  // Действия
  setSelectedSector: (id) => set({ selectedSector: id }),

  setSelectedKeyFunction: (id) => set({ selectedKeyFunction: id }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  // Сброс к начальному состоянию
  reset: () =>
    set({
      selectedSector: null,
      selectedKeyFunction: null,
      searchQuery: "",
    }),
}));
