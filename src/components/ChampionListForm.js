import React from "react";
import {Field, reduxForm, formValues} from "redux-form";
import {connect} from "react-redux";
import {CARDS, SUITS} from "../resources/selectValues";

class ChampionListForm extends React.Component {
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
            <form onChange={this.props.onChange}>
                <Field name="cards" component="select">
                    {this.renderSelectOptions(CARDS)}
                </Field>
                <Field name="suits" component="select">
                    {this.renderSelectOptions(SUITS)}
                </Field>
            </form>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        initialValues: {
            cards: state.board.cards,
            suits: state.board.suits
        },
        onChange: ownProps.onChange
    }
};
const wrappedForm = reduxForm({
    form: 'ChampionsForm',
    enableReinitialize : true
})(ChampionListForm);
export default connect(mapStateToProps)(wrappedForm);
