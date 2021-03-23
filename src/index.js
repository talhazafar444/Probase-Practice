import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { watcherSaga } from "./redux/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
