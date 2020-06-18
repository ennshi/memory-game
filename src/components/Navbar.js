import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <h1>MEMORY_GAME</h1>
                <button onClick={this.props.onClick} className="yellow-btn"><i className="fas fa-trophy"></i></button>
            </div>
        );
    }
}

export default Navbar;
