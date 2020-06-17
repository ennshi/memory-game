import {FLIP_CARD, INITIALIZE_BOARD, MATCHED_CARDS, STOP_TIMER, UPDATE_TIMER} from "./types";

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
    }, 700);
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
