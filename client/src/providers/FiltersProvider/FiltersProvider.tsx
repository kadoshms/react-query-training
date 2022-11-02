import { createContext, ReactNode, useCallback, useState } from "react";

export interface Filters {
  categories: string[];
}

export const FiltersContext = createContext({
  filters: {
    categories: [] as string[],
  },
  setFilters(filters: Filters) {},
});

interface FiltersProviderProps {
  children: ReactNode;
}

export function FiltersProvider({ children }: FiltersProviderProps) {
  const [filters, setFilters] = useState({
    categories: [] as string[],
  });

  const updateFilters = useCallback((filters: Filters) => {
    setFilters((prev) => ({ ...prev, ...filters }));
  }, []);

  return (
    <FiltersContext.Provider value={{ filters, setFilters: updateFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
