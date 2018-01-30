
import { combineReducers } from 'redux';
import * as todoReducder from './todo';
import { Todo } from '../model/model';

export interface RootState {
  todoList: Array<Todo>;
  todoCount: number;
}

export default combineReducers<RootState>({
  ...todoReducder
});