import {INITIALIZE_BOARD} from "./types";

export const initializeBoard = (formValues) => {
    return {
        type: INITIALIZE_BOARD,
        payload: formValues
    }
};
