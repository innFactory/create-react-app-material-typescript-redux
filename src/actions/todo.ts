import { Action, ActionType, Todo } from '../model/model';

export function addTodo(todo: Todo): Action<Todo> {

    return {
        type: ActionType.ADD_TODO,
        payload: todo
    };
}

// Async Function expample with redux-thunk
export function completeTodo(todoId: number) {

    // here you could do API eg

    return (dispatch: Function, getState: Function) => {

        dispatch({ type: ActionType.COMPLETE_TODO, payload: todoId });
    };
}

export function uncompleteTodo(todoId: number): Action<number> {

    return {
        type: ActionType.UNCOMPLETE_TODO,
        payload: todoId
    };
}

export function deleteTodo(todoId: number): Action<number> {

    return {
        type: ActionType.DELETE_TODO,
        payload: todoId
    };
}