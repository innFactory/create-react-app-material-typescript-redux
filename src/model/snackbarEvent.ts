export interface SnackbarEvent {
	message: string;
	severity: "error" | "success" | "info";
	technicalInfo?: any;
}

export enum SnackbarEventActions {
	ADD_SNACKBAR_EVENT = "ADD_SNACKBAR_EVENT",
	DELETE_SNACKBAR_EVENT = "DELETE_SNACKBAR_EVENT",
	PURGE_SNACKBARS = "PURGE_SNACKBARS",
}

interface SnackbarEventActionType<T, P> {
	type: T;
	payload: P;
}

export type SnackbarEventAction =
	| SnackbarEventActionType<
			typeof SnackbarEventActions.ADD_SNACKBAR_EVENT,
			SnackbarEvent
	  >
	| SnackbarEventActionType<
			typeof SnackbarEventActions.DELETE_SNACKBAR_EVENT,
			SnackbarEvent
	  >;
