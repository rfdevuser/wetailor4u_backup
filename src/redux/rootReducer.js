import { combineReducers } from 'redux';
import fabricReducer from './reducers/FabricReducer';

// Combine all reducers
const rootReducer = combineReducers({
  fabric: fabricReducer  // Assigning jobReducer to the 'job' key in the store state
});

export default rootReducer;
