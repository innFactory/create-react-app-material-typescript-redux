/**
 * Created by toni on 12.03.2017.
 */
import { Action } from '../model/model';

export default function createReducer(initialState: any, handlers: any) {
    return function reducer(state: any = initialState, action: Action<any>) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}