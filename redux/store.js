import storage from "./storage";

import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import rootReducer from "./reducer";

import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "root2",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk];

let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
let persistor = persistStore(store);
export { store, persistor };
