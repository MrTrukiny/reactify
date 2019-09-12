import axios from 'axios';
import { GET_ALBUMS, ALBUMS_LOADING } from '../actions/types';

export const getAlbums = id => dispatch => {
  dispatch(setAlbumsLoading());
  axios
    .get(`/artists/${id}/albums`)
      .then(res => 
        dispatch({
          type: GET_ALBUMS,
          payload: res.data.data
        })
      );
}

export const setAlbumsLoading = () => {
  return {
    type: ALBUMS_LOADING
  }
}