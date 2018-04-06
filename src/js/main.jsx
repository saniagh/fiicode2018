import React from 'react';
import ReactDom from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import storeConfig from './modules/storeConfig.js';

import BaseApp from './pages/BaseApp.jsx';

const store = storeConfig();

injectTapEventPlugin();

ReactDom.render(
    <Provider store={store}>
      <Router>
        <BaseApp/>
      </Router>
    </Provider>, document.getElementById('reactApp'));
