import {FLIP_CARD, INITIALIZE_BOARD, MATCHED_CARDS} from "./types";

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

