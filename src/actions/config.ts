import { ConfigAction, ConfigActions } from '../model';

export function purgeState(): ConfigAction {
	return {
		type: ConfigActions.PURGE_STATE,
		payload: undefined,
	};
}

export function setDrawerOpen(open: boolean): ConfigAction {
	return {
		type: ConfigActions.DRAWER_OPEN,
		payload: open,
	};
}
