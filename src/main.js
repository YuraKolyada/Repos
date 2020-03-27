import '@babel/polyfill';
import 'isomorphic-fetch';

import React     from 'react';
import ReactDOM  from 'react-dom';
import { hot }   from 'react-hot-loader/root';

import Main      from './components/pages/Main';

const App = hot(Main);

export function render() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
};

render();
