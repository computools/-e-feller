import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { reducer as formReducer } from 'redux-form'
import { authReducer } from './reducers/auth-reducer';
import { homeReducer } from './reducers/home-reducer';
import { profileReducer } from './reducers/profile-reducer';
import { langReducer } from "./reducers/lang-reducer";
import { modalReducer } from "./reducers/modal-reducer";
import {reducer as burgerMenu} from 'redux-burger-menu';

const logger = createLogger({
  collapsed: true
});

const rootReducer = combineReducers({
  authReducer,
  homeReducer,
  profileReducer,
  langReducer,
  modalReducer,
  form: formReducer,
  burgerMenu
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

window.store = store; // to get access from browser

store.subscribe(() => {
  console.log('store has been changed!');
});

export default store;
