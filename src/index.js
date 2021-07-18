import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/headlines-reducer';
import { Provider } from 'react-redux';
import thuckMiddleware from 'redux-thunk';
import middlewareLogger from './middleware/middleware-logger';

const store = createStore(reducer, applyMiddleware(thuckMiddleware, middlewareLogger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
