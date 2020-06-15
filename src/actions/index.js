import {FLIP_CARD, INITIALIZE_BOARD} from "./types";

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
