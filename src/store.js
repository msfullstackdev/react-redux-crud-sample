import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware  from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootWatcher from './sagas/saga';

const middleware = createSagaMiddleware();

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(middleware),
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    )
);

middleware.run(rootWatcher);

export default store;