import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./Reducers";  // Your combined or root reducer

const middleware = [thunk];

const store = legacy_createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;