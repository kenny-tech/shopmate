import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router} from 'react-router-dom';

// const store = createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(reduxThunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
//     )
// )

const persistConfig = {
    key: 'cart',
    storage: storage,
    // whitelist: ['cart'] // which reducer want to store
  };
  const pReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    pReducer,
    compose(
        applyMiddleware(reduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)

  const persistor = persistStore(store);
  export { persistor, store };
  

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
