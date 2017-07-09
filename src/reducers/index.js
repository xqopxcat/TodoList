import { combineReducers } from 'redux';
import TodoReducer from './reducer_todolist';

const rootReducer = combineReducers({
	todos:TodoReducer
	
});

export default rootReducer;
