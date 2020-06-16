import {FLIP_CARD, INITIALIZE_BOARD, MATCHED_CARDS} from "../actions/types";

const INIT_STATE = {
    isInit: false,
    idxOpened: [],
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
        case FLIP_CARD:
            return {
                ...state,
                board: toggleOneCard(state.board, action.payload),
                idxOpened: listOpenedCards(state.idxOpened, action.payload)
            };
        case MATCHED_CARDS:
            return {
                ...state,
                board: matchTwoCards(state.board, action.payload),
                idxOpened: []
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

const toggleOneCard = (board, idx) => {
    const newBoard = [...board];
    newBoard[idx].opened = !board[idx].opened;
    return newBoard;
};

const listOpenedCards = (prevList, idx) => {
    if(prevList.includes(idx)) {
       return prevList.filter(cardIdx => cardIdx !== idx);
    }
    return [...prevList, idx];
};

const matchTwoCards = (board, {idx1, idx2}) => {
    const newBoard = [...board];
    newBoard[idx1].matched = newBoard[idx2].matched = true;
    newBoard[idx1].opened = newBoard[idx2].opened = false;
    return newBoard;
};
