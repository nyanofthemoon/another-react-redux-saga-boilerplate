import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from '@hot-loader/react-dom';

import HotConnectedApp, { ConnectedApp } from './containers/App';
import configureStore, { history } from './configureStore';

import { unregister } from './serviceWorker';

const store = configureStore();
const App = module.hot ? HotConnectedApp : ConnectedApp;

const render = () => {
  ReactDOM.render(
    <Provider id="provider" store={store}>
      <App id="app" history={history} />
    </Provider>,
    document.getElementById('root'),
  );
};

render();
unregister();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./containers/App', () => {
    render();
  });
}
