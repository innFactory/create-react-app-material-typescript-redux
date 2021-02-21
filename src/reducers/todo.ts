import { ConfigActions } from '../model/config';
import { Todo, TodoAction, TodoActions } from '../model/index';
import createReducer from './createReducer';

export const todoList = createReducer<Todo[]>([], {
	[TodoActions.ADD_TODO](state: Todo[], action: TodoAction) {
		return [...state, action.payload];
	},
	[TodoActions.COMPLETE_TODO](state: Todo[], action: TodoAction) {
		// search after todo item with the given id and set completed to true
		return state.map(t => (t.id === action.payload ? { ...t, completed: true } : t));
	},
	[TodoActions.UNCOMPLETE_TODO](state: Todo[], action: TodoAction) {
		// search after todo item with the given id and set completed to false
		return state.map(t => (t.id === action.payload ? { ...t, completed: false } : t));
	},
	[TodoActions.DELETE_TODO](state: Todo[], action: TodoAction) {
		// remove all todos with the given id
		return state.filter(t => t.id !== action.payload);
	},
	[ConfigActions.PURGE_STATE](state: Todo[], action: TodoAction) {
		return [];
	},
});
