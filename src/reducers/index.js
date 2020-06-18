import {combineReducers} from "redux";
import { reducer as formReducer } from "redux-form";
import boardReducers from "./boardReducers";
import timerReducers from "./timerReducers";
import championsReducers from "./championsReducers";

export default combineReducers({
    board: boardReducers,
    timer: timerReducers,
    champions: championsReducers,
    form: formReducer
});
