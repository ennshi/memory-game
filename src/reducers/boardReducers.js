import {INITIALIZE_BOARD} from "../actions/types";

const INIT_STATE = {};

export default (state=INIT_STATE, action) => {
    switch (action.type) {
        case INITIALIZE_BOARD:
            return {};
        default:
            return state;
    }
}
