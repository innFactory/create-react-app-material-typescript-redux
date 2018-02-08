
import { combineReducers } from 'redux';
import * as todoReducder from './todo';
import { Todo } from '../model/model';

export interface RootState {
  todoList: Array<Todo>;
}

export default combineReducers<RootState>({
  ...todoReducder
});