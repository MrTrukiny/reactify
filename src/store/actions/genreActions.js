import axios from "axios";
import { GET_GENRES, GENRES_LOADING, GET_RANDOM_SONG } from "../actions/types";

export const getGenres = id => dispatch => {
  dispatch(setGenresLoading());
  axios.get(`/genres`).then(res =>
    dispatch({
      type: GET_GENRES,
      payload: res.data.data
    })
  );
};

export const setGenresLoading = () => {
  return {
    type: GENRES_LOADING
  };
};

export const getRandomSongByGenre = genre => dispatch => {
  dispatch(setGenresLoading());
  axios.get(`/genres/${genre}/random_song`).then(res =>
    dispatch({
      type: GET_RANDOM_SONG,
      payload: res.data.data
    })
  );
};
