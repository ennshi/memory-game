import React from "react";
import Navbar from "./Navbar";
import "../css/App.css";
import SettingsForm from "./SettingsForm";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <SettingsForm />
            </div>
        );
    }
}

export default App;
