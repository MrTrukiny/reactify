import axios from "axios";
import { GET_SONGS, SONGS_LOADING } from "../actions/types";
import { baseURL } from './baseURL'

export const getSongs = id => dispatch => {
  dispatch(setSongsLoading());
  axios.get(`${baseURL}/albums/${id}/songs`).then(res =>
    dispatch({
      type: GET_SONGS,
      payload: res.data.data
    })
  );
};

export const setSongsLoading = () => {
  return {
    type: SONGS_LOADING
  };
};
