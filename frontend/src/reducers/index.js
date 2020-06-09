import { combineReducers } from "redux";
import { map } from "./map";
import { user } from "./user";

export const reducers = combineReducers({
    map, user
})