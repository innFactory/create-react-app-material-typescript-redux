import { ConfigAction, ConfigActions } from '../model';
import createReducer from './createReducer';

export const drawerOpen = createReducer<boolean>(false, {
	[ConfigActions.DRAWER_OPEN](state: boolean, action: ConfigAction) {
		return action.payload;
	},

	[ConfigActions.PURGE_STATE](state: boolean, action: ConfigAction) {
		return false;
	},
});
