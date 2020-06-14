import {combineReducers} from "redux";
import boardReducers from "./boardReducers";
import timerReducers from "./timerReducers";

export default combineReducers({
    board: boardReducers,
    timer: timerReducers
});
