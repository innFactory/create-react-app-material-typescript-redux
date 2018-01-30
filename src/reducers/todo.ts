import createReducer from './createReducer';
import { Action, ActionType, Todo } from '../model/model';

export const todoList = createReducer([], {
    [ActionType.ADD_TODO](state: Array<Todo>, action: Action<Todo>) {
        return [...state, action.payload];
    },
});
