
import { Typography } from '@material-ui/core';
import * as React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import App from './App';
import configureStore from './configureStore';

const logger = (createLogger as any)();

var middleware = applyMiddleware(logger, thunk);

if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware);
}

const { persistor, store } = configureStore();

class ReduxRoot extends React.Component {

    state = {
        mobileOpen: true,
    };

    render() {

        return (
            <Provider store={store}>
                <PersistGate loading={<Typography>Loading...</Typography>} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        );
    }
}

export default ReduxRoot;