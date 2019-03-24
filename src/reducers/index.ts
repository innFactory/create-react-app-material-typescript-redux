
import { History } from 'history';
import { combineReducers } from 'redux';
import { Todo } from '../model/model';
import * as todoReducder from './todo';

export interface RootState {
  todoList: Todo[];
}

export default (history: History) => combineReducers({
  ...todoReducder
});