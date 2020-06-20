import {
    EXIT,
    FLIP_CARD,
    GAME_ENDED,
    INITIALIZE_BOARD,
    MATCHED_CARDS,
    STOP_TIMER,
    TOGGLE_CHAMPLIST,
    UPDATE_TIMER
} from "./types";

export const initializeBoard = (formValues) => {
    return {
        type: INITIALIZE_BOARD,
        payload: formValues
    }
};

export const flipCard = (idx) => {
    return {
        type: FLIP_CARD,
        payload: idx
    };
};

export const matchedCards = (idx1, idx2) => async (dispatch) => {
    await setTimeout(() => {
        dispatch({
            type: MATCHED_CARDS,
            payload: {idx1, idx2}
        });
    }, 600);
};

export const stopTimer = () => {
    return {
        type: STOP_TIMER
    };
};

export const updateTimer = () => {
    return {
        type: UPDATE_TIMER
    };
};

export const exitCurrentGame = () => {
    return {
        type: EXIT
    };
};

export const toggleChampionList = () => {
    return {
        type: TOGGLE_CHAMPLIST
    };
};

export const gameEnded = () => {
    return {
        type: GAME_ENDED
    }
};
