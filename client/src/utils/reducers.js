import { useReducer } from "react";
import {
  UPDATE_PODCASTS,
  UPDATE_GENRES,
  UPDATE_CURRENT_GENRE
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PODCASTS:
      return {
        ...state,
        podcasts: [...action.podcasts],
      };

    case UPDATE_GENRES:
      return {
        ...state,
        genres: [...action.genres],
      };

    case UPDATE_CURRENT_GENRE:
      return {
        ...state,
        currentGenre: action.currentGenre
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}