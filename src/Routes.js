import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import MasterSearch from "./Search/MasterSearch"
import DataUpload from "./DataUpload/DataUpload";
import Home from "./Home/Home";
import history from './history';
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import Help from "./Help/Help";
import PieChart from "./RiskUserData/PieChart";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Home" exact component={PieChart} />
                    <Route path="/MasterSearch" component={MasterSearch} />
                    <Route path="/DataUpload" component={DataUpload} />
                    <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
                    <Route path="/Help" component={Help} />
                </Switch>
            </Router>
        )
    }
}
