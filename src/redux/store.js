import { combineReducers, createStore } from "redux";
import villaReducer from "./villaReducer";
import favouriteReducer from './favouriteReducer';
import allReducer from "./allReducer";

let reducers = combineReducers({
    villaPage: villaReducer,
    favouritePage: favouriteReducer,
    allPage: allReducer
});

let store = createStore(reducers);


export default store;