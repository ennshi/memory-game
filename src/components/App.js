import React from "react";
import Navbar from "./Navbar";
import "../css/App.css";
import SettingsForm from "./SettingsForm";
import {connect} from "react-redux";
import Board from "./Board";
import ChampionList from "./ChampionList";
import {gameEnded, toggleChampionList} from "../actions";
import {addChampionToCookie} from "../resources/cookies";

class App extends React.Component {
    mainViewRender = () => {
        if(this.props.showChampionList) {
            return <ChampionList />
        }
        if (this.props.boardIsInit) {
            return <Board />
        }
        return <SettingsForm />;
    };
    endGame = () => {
            this.props.gameEnded();
            const champion = this.createNewChampion();
            addChampionToCookie(champion);
    };
    createNewChampion = () => {
        const {cards, suits, username, timer} = this.props;
        return {
            cards,
            suits,
            username,
            timer
        };
    };
    componentDidUpdate() {
        if(!this.props.endGame && !this.props.cardsLeft.length && this.props.boardIsInit) {
            this.endGame();
        }
    }
    render() {
        return (
            <div className="App">
                <Navbar onClick={this.props.toggleChampionList} />
                {this.mainViewRender()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        boardIsInit: state.board.isInit,
        showChampionList: state.champions.showChampionList,
        cardsLeft: state.board.board.filter(card => !card.matched),
        cards: state.board.cards,
        suits: state.board.suits,
        username: state.board.username,
        timer: state.timer.timer,
        endGame: state.board.endGame
    }
};
export default connect(
    mapStateToProps,
    {
        toggleChampionList,
        gameEnded
    }
)(App);
