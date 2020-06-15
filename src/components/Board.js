import React from "react";
import {connect} from "react-redux";
import Card from "./Card";

class Board extends React.Component {
    render() {
        const cards = this.props.board.map((card, index) => <Card id={index} key={index} />);
        return (
            <div className="board">
                {cards}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        board: state.board.board
    }
};
export default connect(mapStateToProps)(Board);
