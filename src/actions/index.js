import {FLIP_CARD, INITIALIZE_BOARD, MATCHED_CARDS} from "./types";

export const initializeBoard = (formValues) => {
    return {
        type: INITIALIZE_BOARD,
        payload: formValues
    }
};

export const flipCard = (id) => async (dispatch) => {
    await setTimeout(() => {
        dispatch({
            type: FLIP_CARD,
            payload: id
        });
    }, 400);
};

export const matchedCards = (id1, id2) => async (dispatch) => {
    await setTimeout(() => {
        dispatch({
            type: MATCHED_CARDS,
            payload: {id1, id2}
        });
    }, 310);
};
