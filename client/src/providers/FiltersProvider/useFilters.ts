import { useContext } from "react";
import { FiltersContext } from "./FiltersProvider";

export function useFilters() {
  return useContext(FiltersContext);
}
