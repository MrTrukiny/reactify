import { combineReducers } from "redux";
import artistReducer from "./artistReducer";
import albumReducer from "./albumReducer";
import songReducer from "./songReducer";
import genreReducer from "./genreReducer";

export default combineReducers({
  artists: artistReducer,
  albums: albumReducer,
  songs: songReducer,
  genres: genreReducer,
  randomSong: genreReducer
});
