import React from "react";
import {connect} from "react-redux";
import {formValueSelector} from "redux-form";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <h1>MEMORY_GAME</h1>
                <button
                    onClick={this.props.onClick}
                    className="yellow-btn"
                    disabled={!this.props.allowCookie}>
                    <i className="fas fa-trophy"></i>
                </button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const selector = formValueSelector('SettingsForm');
    return {
        allowCookie: selector(state, 'allowCookie')
    };
};
export default connect(mapStateToProps)(Navbar);
