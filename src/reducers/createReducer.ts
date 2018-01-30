/**
 * Created by toni on 12.03.2017.
 */
import { Action } from '../model/model';

export default function createReducer(initialState: Object, handlers: Object) {
    return function reducer(state: Object = initialState, action: Action<any>) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}