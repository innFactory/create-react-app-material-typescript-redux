export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export enum TodoActions {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  COMPLETE_TODO = "COMPLETE_TODO",
  UNCOMPLETE_TODO = "UNCOMPLETE_TODO",
}

interface TodoActionType<T, P> {
  type: T;
  payload: P;
}

export type TodoAction =
  | TodoActionType<typeof TodoActions.ADD_TODO, Todo>
  | TodoActionType<typeof TodoActions.COMPLETE_TODO, number>
  | TodoActionType<typeof TodoActions.UNCOMPLETE_TODO, number>
  | TodoActionType<typeof TodoActions.DELETE_TODO, number>
;
