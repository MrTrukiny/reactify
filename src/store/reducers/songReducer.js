import { GET_SONGS, SONGS_LOADING } from '../actions/types';

const initialState = {
  songs: [],
  loading: false
}

export default function(state= initialState, action) {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload,
        loading: false
      }
    case SONGS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

