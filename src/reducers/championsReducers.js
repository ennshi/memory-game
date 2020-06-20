import {EXIT, TOGGLE_CHAMPLIST} from "../actions/types";

const INIT_VALUE = {
    showChampionList: false
};
export default (state=INIT_VALUE, action) => {
    switch (action.type) {
        case TOGGLE_CHAMPLIST:
            return {
                ...state,
                showChampionList: !state.showChampionList
            };
        case EXIT:
            return INIT_VALUE;
        default:
            return state;
    }
};
