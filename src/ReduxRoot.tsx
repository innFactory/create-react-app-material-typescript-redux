import { Typography } from "@material-ui/core";
import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import configureStore from "./configureStore";

const { persistor, store } = configureStore();

export function ReduxRoot() {
	return (
		<Provider store={store}>
			<PersistGate
				loading={<Typography>Loading...</Typography>}
				persistor={persistor}
			>
				<App />
			</PersistGate>
		</Provider>
	);
}
