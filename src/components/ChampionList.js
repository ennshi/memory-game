import React from "react";
import "../css/ChampionList.css";
import ChampionListForm from "./ChampionListForm";
import {formValueSelector} from "redux-form";
import {connect} from "react-redux";
import {showOneBoardResults} from "../resources/cookies";

class ChampionList extends React.Component {
    state = {
        champions: []
    };
    getChampionsFromCookies = () => {
        const {cardsChampionList, suitsChampionList} = this.props;
        this.setState({champions: showOneBoardResults(cardsChampionList, suitsChampionList)});
    };
    renderChampions = () => {

    };
    componentDidMount() {
        this.getChampionsFromCookies();
    };
    componentDidUpdate(prevProps) {
        if(prevProps.cardsChampionList !== this.props.cardsChampionList ||
            prevProps.suitsChampionList !== this.props.suitsChampionList) {
            this.getChampionsFromCookies();
        }
    }
    render() {
        return (
            <div className="champion-list-wrapper">
                <ChampionListForm />
            </div>
        );
    }
}
const mapStateToProps = state => {
    const selector = formValueSelector('ChampionsForm');
    return {
        cardsChampionList: selector(state, 'cards'),
        suitsChampionList: selector(state, 'suits'),
    }
};
export default connect(mapStateToProps)(ChampionList);
