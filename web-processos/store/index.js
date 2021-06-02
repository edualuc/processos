import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import { persistStore, persistReducer } from "redux-persist";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import storage from "redux-persist/lib/storage";

import reducers from './ducks';
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: ['authorization', 'authentication', 'language']
// };

let midCompose = "";

midCompose = applyMiddleware(sagaMiddleware);

// const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(reducers, midCompose);

sagaMiddleware.run(rootSaga);

export { store } ;