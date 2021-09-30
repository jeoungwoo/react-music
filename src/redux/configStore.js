import { createStore, combineReducers, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import musics from "./module/musics";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ musics });

const store = createStore(rootReducer, enhancer);

export default store;
