import { useReducer } from "react";
import {
  UPDATE_PODCASTS,
  ADD_TO_MYPODCASTS,
  REMOVE_FROM_MYPODCASTS,
  UPDATE_GENRES,
  UPDATE_CURRENT_GENRE,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PODCASTS:
      return {
        ...state,
        podcasts: [...action.podcasts],
      };

    case ADD_TO_MYPODCASTS:
      return {
        ...state,
        myPodcastsOpen: true,
        myPodcasts: [...state.myPodcasts, action.podcast],
      };

    case REMOVE_FROM_MYPODCASTS:
      let newState = state.myPodcasts.filter((podcast) => {
        return podcast._id !== action._id;
      });

      return {
        ...state,
        myPodcastOpen: newState.length > 0,
        myPodcast: newState,
      };

    case UPDATE_GENRES:
      return {
        ...state,
        genres: [...action.genres],
      };

    case UPDATE_CURRENT_GENRE:
      return {
        ...state,
        currentGenre: action.currentGenre,
      };

    default:
      return state;
  }
};

export function usePodcastReducer(initialState) {
  return useReducer(reducer, initialState);
}
