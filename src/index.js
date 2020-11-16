import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider}  from 'react-redux';
import BurgerBuilderreducer from './store/reducers/reducer';
import OrderReducer from './store/reducers/order';
import AuthReducer from './store/reducers/auth';
import  thunk from 'redux-thunk';


const rootReducer = combineReducers (
    {
      burgerBuilder:BurgerBuilderreducer,
      order:OrderReducer,
      auth:AuthReducer,
    }
  )

const composeEnhancers = process.env.NODE_ENV==='developement' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><App /> </Provider> , document.getElementById('root'));
registerServiceWorker();
