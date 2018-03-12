import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReduxRoot from './ReduxRoot';

const rootEl = document.getElementById('root');
ReactDOM.render(<ReduxRoot />, rootEl);

if (module.hot) {
    module.hot.accept('./ReduxRoot', () => {
        const NextApp = require('./ReduxRoot').default;
        ReactDOM.render(
            <NextApp />,
            rootEl
        );
    });
}