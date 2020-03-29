import '@babel/polyfill';
import 'isomorphic-fetch';

import React     from 'react';
import ReactDOM  from 'react-dom';
import { hot }   from 'react-hot-loader/root';

import MainPage  from './components/pages/Main';

const App = hot(MainPage);

export function render() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
};

render();
