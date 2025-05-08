import { create } from 'zustand';

interface SearchStore {
  searchTerm: string;
  setSearchTerm: (query: string) => void;
  isQueryEnabled: boolean;
  setIsQueryEnabled: (isQueryEnabled: boolean) => void;
  resetSearch: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchTerm: '',
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  isQueryEnabled: false,
  setIsQueryEnabled: (isQueryEnabled) => set({ isQueryEnabled }),
  resetSearch: () =>
    set(() => ({
      searchTerm: '',
      isQueryEnabled: false,
    })),
}));
