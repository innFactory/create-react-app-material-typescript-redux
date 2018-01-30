import * as React from 'react';
import App from './App';
import {
    createStore,
    applyMiddleware,
    Store,
} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { RootState } from './reducers';

const logger = (createLogger as any)();

var middleware = applyMiddleware(logger, thunk);

if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware);
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
