import {combineReducers, createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import newsReducer from "../reducers/newsReducers";

const rootReducer = combineReducers({
    news: newsReducer
});

export const store = createStore(rootReducer, composeWithDevTools());


