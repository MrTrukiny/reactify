import { combineReducers } from 'redux';
import artistReducer from './artistReducer';
import albumReducer from './albumReducer';
import songReducer from './songReducer';

export default combineReducers({
  artists: artistReducer,
	albums: albumReducer,
	songs: songReducer
})