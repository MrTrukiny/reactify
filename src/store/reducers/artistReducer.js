import { GET_ARTISTS, ARTISTS_LOADING } from "../actions/types";

const initialState = {
  artists: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARTISTS:
      return {
        ...state,
        artists: action.payload,
        loading: false
      };
    case ARTISTS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
