export enum ConfigActions {
	PURGE_STATE = 'PURGE_STATE',
	DRAWER_OPEN = 'DRAWER_OPEN',
}

interface ConfigActionType<T, P> {
	type: T;
	payload: P;
}

export type ConfigAction =
	| ConfigActionType<typeof ConfigActions.PURGE_STATE, undefined>
	| ConfigActionType<typeof ConfigActions.DRAWER_OPEN, boolean>;
