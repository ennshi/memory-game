import {combineReducers} from "redux";
import { reducer as formReducer } from "redux-form";
import boardReducers from "./boardReducers";
import timerReducers from "./timerReducers";

export default combineReducers({
    board: boardReducers,
    timer: timerReducers,
    form: formReducer
});
