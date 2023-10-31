import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/index.tsx";

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
