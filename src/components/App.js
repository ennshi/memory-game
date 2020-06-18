import React from "react";
import Navbar from "./Navbar";
import "../css/App.css";
import SettingsForm from "./SettingsForm";
import {connect} from "react-redux";
import Board from "./Board";
import ChampionList from "./ChampionList";
import {toggleChampionList} from "../actions";

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
        showChampionList: state.champions.showChampionList
    }
};
export default connect(
    mapStateToProps,
    {
        toggleChampionList,
    }
)(App);
