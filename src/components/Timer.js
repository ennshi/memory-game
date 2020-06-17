import React from "react";
import {connect} from "react-redux";
import {stopTimer} from "../actions";

class Timer extends React.Component {
    onPause = () => {
        this.props.stopTimer();
    };
    onExit = () => {

    };
    render() {
        return (
            <div className='timer'>
                <h4>{this.props.timer}</h4>
                <button onClick={this.onPause} className="yellow-btn"><i className="fas fa-pause"></i></button>
                <button onClick={this.onExit} className="yellow-btn" style={{fontSize: '1.8rem'}}><i className="fas fa-times"></i></button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        timer: state.timer.timer
    }
};
export default connect(
    mapStateToProps,
    {
        stopTimer
    }
)(Timer);
