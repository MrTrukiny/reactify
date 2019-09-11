import axios from 'axios';
import { GET_ARTISTS, ARTISTS_LOADING } from '../actions/types';

export const getArtists = () => dispatch => {
  dispatch(setArtistsLoading());
  axios
    .get('/artists')
      .then(res => 
        dispatch({
          type: GET_ARTISTS,
          payload: res.data.data
        })
      );
}

export const setArtistsLoading = () => {
  return {
    type: ARTISTS_LOADING
  }
}