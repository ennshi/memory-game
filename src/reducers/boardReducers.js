import {INITIALIZE_BOARD} from "../actions/types";

const INIT_STATE = {
    isInit: false,
    cards: 20,
    suits: 5,
    theme: 'animals'
};

export default (state=INIT_STATE, action) => {
    switch (action.type) {
        case INITIALIZE_BOARD:
            return {
                ...state,
                ...action.payload,
                board: generateBoard(action.payload.cards, action.payload.suits),
                isInit: true
            };
        default:
            return state;
    }
}

const shuffleCards = (arr) => {
    let shuffledArr = [...arr];
    // shuffledArr.sort(() => Math.random() - 0.5);
    // shuffledArr.sort(() => Math.random() - 0.5);
    // shuffledArr.sort(() => Math.random() - 0.5);
    return shuffledArr;
};

const generateBoard = (numCards, numSuits) => {
    const board = [];
    let suit = 0;
    let numPairs = numCards/2;
    while(numPairs > 0) {
        let card = {
            opened: false,
            matched: false
        };
        if(suit >= numSuits) {
            suit = 0;
        }
        card.suit = suit;
        suit++;
        board.push(card, Object.assign({}, card));
        numPairs--;
    }
    return shuffleCards(board);
};
