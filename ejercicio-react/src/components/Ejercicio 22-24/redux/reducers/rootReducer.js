import { combineReducers } from "redux";
import { filterReducer } from "./filterSlice";
import { todoReducer } from "./taskSlice";

export const rootReducer = combineReducers({
    todoState: todoReducer,
    filterState: filterReducer
})