import React from "react";
import {connect} from "react-redux";
import Card from "./Card";
import {exitCurrentGame, flipCard, matchedCards} from "../actions";
import Timer from "./Timer";

class Board extends React.Component {
    onCardClick = (idx) => {
        if(this.props.openedCards.length < 2) {
            this.props.flipCard(idx);
        }
    };
    onExit = () => {
        this.props.exitCurrentGame();
    };
    checkMatch = (idx1, idx2, board) => {
        if(board[idx1].suit === board[idx2].suit) {
            return this.props.matchedCards(idx1, idx2);
        }
        setTimeout(() => {
            this.props.flipCard(idx1);
            this.props.flipCard(idx2);
        }, 1000);
    };
    render() {
        const cards = this.props.board.map((card, index) => (
            <Card
                id={index}
                key={index}
                onCardClick={this.onCardClick}
            />));
        return (
            <>
                <Timer onExit={this.onExit}/>
                <div className="board">
                    {cards}
                </div>
            </>
        );
    }
    componentDidUpdate() {
        const {openedCards, board} = this.props;
        if(openedCards.length === 2) {
            this.checkMatch(openedCards[0], openedCards[1], board);
        }
    }
}
const mapStateToProps = (state) => {
    return {
        board: state.board.board,
        openedCards: state.board.idxOpened
    }
};
export default connect(
    mapStateToProps,
    {
        flipCard,
        matchedCards,
        exitCurrentGame
    }
)(Board);
