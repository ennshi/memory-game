import React from "react";
import "../css/ChampionList.css";
import ChampionListForm from "./ChampionListForm";
import {formValueSelector} from "redux-form";
import {connect} from "react-redux";

class ChampionList extends React.Component {
    onChange = () => {
        console.log(this.props.values);
    };
    render() {
        return (
            <div className="champion-list-wrapper">
                <ChampionListForm onChange={this.onChange}/>
            </div>
        );
    }
}
const mapStateToProps = state => {
    const selector = formValueSelector('ChampionsForm');
    return {
        values: selector(state, 'cards')
    }
};
export default connect(mapStateToProps)(ChampionList);
