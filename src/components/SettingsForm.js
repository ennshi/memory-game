import React from "react";
import {connect} from "react-redux";
import {CARDS, SUITS, THEMES} from "../resources/selectValues";
import {Field, reduxForm} from "redux-form";
import {initializeBoard} from "../actions";

class SettingsForm extends React.Component {
    renderSelectOptions = (list) => {
        const selectOptions = [];
        for(const option in list) {
            selectOptions.push(
                <option key={option} value={option}>{list[option]}</option>
            );
        }
        return selectOptions;
    };
    onSubmit = (formValues) => {
        this.props.initializeBoard(formValues);
    };
    render() {
        return (
            <form className="form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <h1 className="form-header">Hello</h1>
                <Field name="username" component="input" placeholder="username_"/>
                <h2 className="form-header">Board</h2>
                <Field name="cards" component="select">
                    {this.renderSelectOptions(CARDS)}
                </Field>
                <Field name="suits" component="select">
                    {this.renderSelectOptions(SUITS)}
                </Field>
                <Field name="theme" component="select">
                    {this.renderSelectOptions(THEMES)}
                </Field>
                <button type="submit" className="submit-btn"><i className="fas fa-play"></i></button>
            </form>
        );
    }
}
const mapStateToProps = (state) => {
    return {
       initialValues: state.board
    };
};
const wrappedForm = reduxForm({
    form: 'SettingsForm',
    enableReinitialize : true
})(SettingsForm);
export default connect(
    mapStateToProps,
    {initializeBoard}
    )(wrappedForm);
