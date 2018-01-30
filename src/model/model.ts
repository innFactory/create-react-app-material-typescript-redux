
export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export enum ActionType {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    UNCOMPLETE_TODO,
}

export interface Action<T> {
    type: ActionType;
    payload: T;
}