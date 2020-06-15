import React from "react";
import Navbar from "./Navbar";
import "../css/App.css";
import SettingsForm from "./SettingsForm";
import {connect} from "react-redux";
import Board from "./Board";

class App extends React.Component {
    mainViewRender = () => {
        if (this.props.boardIsInit) {
            return <Board />
        }
        return <SettingsForm />;
    };
    render() {
        console.log(this.props);
        return (
            <div className="App">
                <Navbar />
                {this.mainViewRender()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        boardIsInit: state.board.isInit
    }
};
export default connect(mapStateToProps)(App);
