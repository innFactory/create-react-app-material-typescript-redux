import { ConfigActions } from '../model/config';
import { SnackbarEvent, SnackbarEventAction, SnackbarEventActions } from '../model/snackbarEvent';
import createReducer from './createReducer';

export const snackbarEvents = createReducer<SnackbarEvent[]>([], {
	[SnackbarEventActions.ADD_SNACKBAR_EVENT](state: SnackbarEvent[], action: SnackbarEventAction) {
		return [...state, action.payload];
	},
	[SnackbarEventActions.DELETE_SNACKBAR_EVENT](state: SnackbarEvent[], action: SnackbarEventAction) {
		return state.filter(e => e.message !== action.payload.message);
	},
	[SnackbarEventActions.PURGE_SNACKBARS](state: SnackbarEvent[], action: SnackbarEventAction) {
		return [];
	},
	[ConfigActions.PURGE_STATE](state: SnackbarEvent[], action: SnackbarEventAction) {
		return [];
	},
});
