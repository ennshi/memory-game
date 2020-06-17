import {EXIT, FLIP_CARD, STOP_TIMER, UPDATE_TIMER} from "../actions/types";

const INIT_STATE = {
    timerActivated: false,
    timer: 0
};

export default (state=INIT_STATE, action) => {
    switch (action.type) {
        case FLIP_CARD:
            return {
                ...state,
                timerActivated: true
            };
        case STOP_TIMER:
            return {
                ...state,
                timerActivated: false
            };
        case UPDATE_TIMER:
            return {
                ...state,
                timerActivated: true,
                timer: (state.timer + 1)
            };
        case EXIT:
            return INIT_STATE;
        default:
            return state;
    }
}
