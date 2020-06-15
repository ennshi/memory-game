import React from "react";
import {connect} from "react-redux";

const classNames = require("classnames");

class Card extends React.Component {
    onClick = () => {

    };
    render() {
        const card = this.props.board[this.props.id];
        const cardClass = classNames({
            'card-inner': true,
            'clicked': card.opened,
            'not-clicked': !card.opened,
            'matched': card.matched
        });
        return(
            <div className="card">
                <div className={cardClass} onClick={this.onClick}>
                    <div className={card.matched ? "card-front matched" : "card-front"}>
                    </div>
                    <div className="card-back">
                        <Image theme={this.props.theme} suit={card.suit}/>
                    </div>
                </div>
            </div>
        );
    }
}
const Image = (props) => {
    return (
        <img src={`/img/${props.theme}/${props.suit}.png`} alt={`${props.theme} ${props.suit}`}/>
    );
};
const mapStateToProps = (state, ownParams) => {
    return {
        board: state.board.board,
        id: ownParams.id,
        theme: state.board.theme
    }
};

export default connect(mapStateToProps)(Card);
