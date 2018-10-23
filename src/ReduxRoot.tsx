import * as React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer, { RootState } from './reducers';

const logger = (createLogger as any)();

var middleware;

if (process.env.NODE_ENV === 'development') {
    // middleware for development with logger and devTools
    middleware = composeWithDevTools(applyMiddleware(logger, thunk));
} else {
    // middleware for production
    middleware = applyMiddleware(thunk);
}

const store = createStore(rootReducer, {}, middleware) as Store<RootState>;

class ReduxRoot extends React.Component {

    state = {
        mobileOpen: true,
    };

    render() {

        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

export default ReduxRoot;
