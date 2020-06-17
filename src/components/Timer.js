import React from "react";
import {connect} from "react-redux";
import {stopTimer, updateTimer} from "../actions";
const classNames = require('classnames');

class Timer extends React.Component {
    timerInterval = null;
    onPause = () => {
        if(this.props.active) {
            this.unsetTimerInterval();
        } else {
            this.setTimerInterval();
        }
    };
    unsetTimerInterval = () => {
        this.props.stopTimer();
        clearInterval(this.timerInterval);
        this.timerInterval = null;
    };
    setTimerInterval = () => {
        if(!this.timerInterval) {
            this.timerInterval = setInterval(() => {
                this.props.updateTimer();
            }, 1000);
        }
    };
    render() {
        const pauseClass = classNames({
            'yellow-btn': true,
            pause: !this.props.active
        });
        return (
            <div className='timer'>
                <h4 className="clock">Timer: {this.props.timer}</h4>
                <div className="btn-set">
                    <button onClick={this.onPause} className={pauseClass}><i className="fas fa-pause"></i></button>
                    <button onClick={this.props.onExit} className="yellow-btn" style={{fontSize: '1.8rem'}}><i className="fas fa-times"></i></button>
                </div>
            </div>
        );
    }
    componentDidUpdate(prevProps) {
        if(!this.props.cardsLeft.length) {
            this.unsetTimerInterval();
        }
        if(this.props.active && !prevProps.active) {
            this.setTimerInterval();
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        timer: state.timer.timer,
        active: state.timer.timerActivated,
        cardsLeft: state.board.board.filter(card => !card.matched),
        onExit: ownProps.onExit
    }
};
export default connect(
    mapStateToProps,
    {
        stopTimer,
        updateTimer
    }
)(Timer);
