import { Action, ActionType, Todo } from "../model/model";
import createReducer from "./createReducer";

export const todoList = createReducer<Todo[]>([], {
	[ActionType.ADD_TODO](state: Todo[], action: Action<Todo>) {
		return [...state, action.payload];
	},
	[ActionType.COMPLETE_TODO](state: Todo[], action: Action<number>) {
		// search after todo item with the given id and set completed to true
		return state.map(t =>
			t.id === action.payload ? { ...t, completed: true } : t
		);
	},
	[ActionType.UNCOMPLETE_TODO](state: Todo[], action: Action<number>) {
		// search after todo item with the given id and set completed to false
		return state.map(t =>
			t.id === action.payload ? { ...t, completed: false } : t
		);
	},
	[ActionType.DELETE_TODO](state: Todo[], action: Action<number>) {
		// remove all todos with the given id
		return state.filter(t => t.id !== action.payload);
	},
});
