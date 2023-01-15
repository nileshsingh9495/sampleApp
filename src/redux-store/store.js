import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root.reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  return {
    ...createStore(
      rootReducer,
      preloadedState,
      composeEnhancers(applyMiddleware(...middlewares)),
    ),
    runSaga: sagaMiddleware.run,
  };
};

export default configureStore;
