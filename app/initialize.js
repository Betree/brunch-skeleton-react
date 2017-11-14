import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './state'
import App from 'components/App.jsx'


const load = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
