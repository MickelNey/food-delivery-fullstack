import {Store} from "./SearchProductContext";

export const getInitialSearchState = (): Store => {
  return {
    searchInput: ''
  }
}
