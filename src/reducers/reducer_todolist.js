import _ from 'lodash';
import { ADD_TODO, DELETE_TODO, DONE_TODO, SET_TYPE, CLEAR_DONE, EDIT_TODO }  from '../actions/index';

var initial = [];

export default function(state = [], action){
	switch(action.type){
		case ADD_TODO:
			initial = [ ...initial, { id: action.id, text: action.payload, done: false }];
			return initial;
		case DELETE_TODO:
			initial = _.remove(initial, (n) => { return n != action.payload; });
			return initial;
		case DONE_TODO:
			initial = initial.map(todo =>
		        (todo.id === action.id) ? {...todo, done: !todo.done} : todo
		    );
			return initial;
		case SET_TYPE:
			switch(action.filter){
				case "undone":
					return _.filter(initial, todo => {
					    return !todo.done;
					});

				case "done":
					return _.filter(initial, todo => {
					    return todo.done;
					});
				default:
					return initial;		
			}
		case CLEAR_DONE:
			initial = _.remove(initial, todo => {
				return !todo.done;
			});
			return initial;
		case EDIT_TODO:
			initial = initial.map(todo =>
		        (todo.id === action.id) ? {...todo, text: action.text} : todo
		    );
		    return initial;
		default:
			return state;
	}
}