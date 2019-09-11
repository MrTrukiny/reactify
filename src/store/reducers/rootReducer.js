import { combineReducers } from 'redux';
import artistReducer from './artistReducer';
import albumReducer from './albumReducer';

export default combineReducers({
  artists: artistReducer,
  albums: albumReducer
})