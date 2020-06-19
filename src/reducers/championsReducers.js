import {EXIT, GAME_ENDED, TOGGLE_CHAMPLIST} from "../actions/types";

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
        case GAME_ENDED:
            return {
                ...state,
                showChampionList: true
            };
        case EXIT:
            return INIT_VALUE;
        default:
            return state;
    }
};
