import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routers} from './routers/routers';

const rootElem = document.getElementById('root')

if (rootElem) {
    const root = ReactDOM.createRoot(rootElem);
    root.render(
        <Routers />
    );
}

