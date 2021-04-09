import storage from "./storage";

import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import rootReducer from "./../redux";

import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware())
);
let persistor = persistStore(store);
export { store, persistor };
