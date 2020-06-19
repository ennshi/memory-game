import React from "react";
import {connect} from "react-redux";
import {exitCurrentGame, toggleChampionList} from "../actions";

class YourScore extends React.Component {
    onClick = () => {
        this.props.exitCurrentGame();
        if(this.props.allowCookie) {
            this.props.toggleChampionList();
        }
    };
    render() {
       return (
           <div className="your-score-wrapper">
               <h1>Your score</h1>
               <p>{this.props.timer}</p>
               <button className="btn" onClick={this.onClick}>OK</button>
           </div>
       );
    }
}
const mapStateToProps = state => {
    return {
        timer: state.timer.timer,
        allowCookie: state.board.allowCookie
    }
};
export default connect(
    mapStateToProps,
    {
        toggleChampionList,
        exitCurrentGame
    })(YourScore);
