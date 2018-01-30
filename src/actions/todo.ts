import { Action, ActionType, Todo } from '../model/model';

export function addTodo(todo: Todo): Action<Todo> {

    return {
        type: ActionType.ADD_TODO,
        payload: todo
    };
}

// Async Function expample with redux-thunk
export function completeTodo() {

    return (dispatch: Function, getState: Function) => {

        dispatch({ type: ActionType.COMPLETE_TODO, payload: null });
    };
} 