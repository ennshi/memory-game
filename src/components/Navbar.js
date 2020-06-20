import React from "react";
import {connect} from "react-redux";
import {formValueSelector} from "redux-form";
import {exitCurrentGame} from "../actions";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <h1 onClick={this.props.exitCurrentGame}>MEMORY_GAME</h1>
                <button
                    onClick={this.props.onClick}
                    className="yellow-btn"
                    disabled={!(this.props.allowCookieFromBoard || this.props.allowCookieFromForm)}>
                    <i className="fas fa-trophy"></i>
                </button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const selector = formValueSelector('SettingsForm');
    return {
        allowCookieFromForm: selector(state, 'allowCookie'),
        allowCookieFromBoard: state.board.allowCookie
    };
};
export default connect(
    mapStateToProps,
    {
        exitCurrentGame
    })(Navbar);
