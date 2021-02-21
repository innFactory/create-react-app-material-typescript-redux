import { Todo, TodoAction, TodoActions } from '../model/index';
import { RootState } from '../reducers/index';

export function addTodo(todo: Todo): TodoAction {
	return {
		type: TodoActions.ADD_TODO,
		payload: todo,
	};
}

// Async Function expample with redux-thunk
export function completeTodo(todoId: number) {
	// here you could do API eg

	return (dispatch: Function, getState: () => RootState) => {
		dispatch({ type: TodoActions.COMPLETE_TODO, payload: todoId });
	};
}

export function uncompleteTodo(todoId: number): TodoAction {
	return {
		type: TodoActions.UNCOMPLETE_TODO,
		payload: todoId,
	};
}

export function deleteTodo(todoId: number): TodoAction {
	return {
		type: TodoActions.DELETE_TODO,
		payload: todoId,
	};
}
