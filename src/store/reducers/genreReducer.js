import { GET_GENRES, GENRES_LOADING, GET_RANDOM_SONG } from "../actions/types";

const initialState = {
  genres: [],
  randomSong: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
        loading: false
      };
    case GENRES_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_RANDOM_SONG:
      return {
        ...state,
        randomSong: action.payload,
        loading: false
      };
    // case SET_SONG_LOADING:
    //   return {
    //     ...state,
    //     loadingSong: true
    //   }
    default:
      return state;
  }
}
