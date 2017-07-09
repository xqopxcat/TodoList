let todoId = 0;

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DONE_TODO = 'DONE_TODO';
export const SET_TYPE = 'SET_TYPE';
export const CLEAR_DONE = 'CLEAR_DONE';
export const EDIT_TODO = 'EDIT_TODO';


export function addTodo(todo) {
	return {
		type: ADD_TODO,
		id: todoId++,
		payload: todo
	};
}

export function deleteTodo(todo){
	return {
		type: DELETE_TODO,
		payload: todo
	}
}

export function doneTodo(id){
	return {
		type: DONE_TODO,
		id: id
	}
} 

export function setType(filter) {
  return { 
  	type: SET_TYPE, 
  	filter: filter 
  }
}

export function clearDone(){
	return {
		type:CLEAR_DONE
	}
}

export function editTodo(id, text){
	return {
		type: EDIT_TODO,
		id: id,
		text: text
	}
}