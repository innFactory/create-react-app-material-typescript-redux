import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as localforage from 'localforage';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistConfig: PersistConfig = {
    key: 'root',
    version: 1,
    storage: localforage,
    blacklist: [],
};

const logger = (createLogger as any)();
const history = createBrowserHistory();

const dev = process.env.NODE_ENV === 'development';

var middleware = dev ? applyMiddleware(logger, thunk, routerMiddleware(history)) :
    applyMiddleware(thunk, routerMiddleware(history));

if (dev) {
    middleware = composeWithDevTools(middleware);
}

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export default () => {
    let store = createStore(persistedReducer, {}, middleware);
    let persistor = persistStore(store);
    return { store, persistor };
};

export { history };
