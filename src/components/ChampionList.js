import React from "react";
import "../css/ChampionList.css";
import ChampionListForm from "./ChampionListForm";
import {formValueSelector} from "redux-form";
import {connect} from "react-redux";
import {showOneBoardResults} from "../resources/cookies";
import {exitCurrentGame, toggleChampionList} from "../actions";

class ChampionList extends React.Component {
    state = {
        champions: []
    };
    getChampionsFromCookies = () => {
        const {cardsChampionList, suitsChampionList} = this.props;
        this.setState({champions: showOneBoardResults(cardsChampionList, suitsChampionList)});
    };
    renderChampions = () => {
        return this.state.champions.map((champion, i) => {
            return (
                <div key={i} className="champion">
                    <span>{(i + 1) + '. '}</span>
                    <span>{champion.username}</span>
                    <span>{champion.timer}</span>
                </div>);
        });
    };
    onExit = () => {
        if(!this.props.boardIsInit) {
            this.props.exitCurrentGame();
        } else {
            this.props.toggleChampionList();
        }

    };
    componentDidMount() {
        this.getChampionsFromCookies();
    };
    componentDidUpdate(prevProps) {
        if(prevProps.cardsChampionList !== this.props.cardsChampionList ||
            prevProps.suitsChampionList !== this.props.suitsChampionList) {
            this.getChampionsFromCookies();
        }
    }
    render() {
        return (
            <>
                <div className="champion-header-container">
                    <h1>Best Score</h1>
                    <button onClick={this.onExit} className="yellow-btn" style={{fontSize: '1.8rem'}}><i className="fas fa-times"></i></button>
                </div>
                <div className="champion-list-wrapper">
                    <ChampionListForm />
                    {this.renderChampions()}
                </div>
            </>
        );
    }
}
const mapStateToProps = state => {
    const selector = formValueSelector('ChampionsForm');
    return {
        cardsChampionList: selector(state, 'cards'),
        suitsChampionList: selector(state, 'suits'),
        boardIsInit: state.board.isInit
    }
};
export default connect(
    mapStateToProps,
    {
        exitCurrentGame,
        toggleChampionList
    })(ChampionList);
