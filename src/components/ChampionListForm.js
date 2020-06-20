import React from "react";
import {Field, reduxForm} from "redux-form";
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
            <form>
                <Field className="form-field-small" name="cards" component="select">
                    {this.renderSelectOptions(CARDS)}
                </Field>
                <Field className="form-field-small" name="suits" component="select">
                    {this.renderSelectOptions(SUITS)}
                </Field>
            </form>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        initialValues: {
            cards: state.board.cards,
            suits: state.board.suits
        },
    }
};
const wrappedForm = reduxForm({
    form: 'ChampionsForm',
    enableReinitialize : true
})(ChampionListForm);
export default connect(mapStateToProps)(wrappedForm);
