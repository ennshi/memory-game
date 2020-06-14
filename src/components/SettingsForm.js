import React from "react";
import {connect} from "react-redux";
import {CARDS, SUITS, THEMES} from "../resources/selectValues";

class SettingsForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();

    };
    renderSelectOptions = (list) => {
        const selectOptions = [];
        for(const option in list) {
            selectOptions.push(
                <option key={option} value={option}>{list[option]}</option>
            );
        }
        return selectOptions;
    };
    render() {
        return (
            <div>
                <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                    <h1 className="form-header">Hello</h1>
                    <input type='text' name='username' placeholder="username"/>
                    <h2 className="form-header">Board</h2>
                    <select name='cards'>
                        {this.renderSelectOptions(CARDS)}
                    </select>
                    <select name='suits'>
                        {this.renderSelectOptions(SUITS)}
                    </select>
                    <select name='theme'>
                        {this.renderSelectOptions(THEMES)}
                    </select>
                    <button type='submit' className="submit-btn"><i className="fas fa-play"></i></button>
                </form>
            </div>
        );
    }
}

export default connect()(SettingsForm);
