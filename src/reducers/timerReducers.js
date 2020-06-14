import {UPDATE_TIMER} from "../actions/types";

const INIT_STATE = {};

export default (state=INIT_STATE, action) => {
    switch (action.type) {
        case UPDATE_TIMER:
            return {};
        default:
            return state;
    }
}
