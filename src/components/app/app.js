import React, {Component} from 'react';
import Leaders from '../leaders';  //+
import {Vote, VoteResult} from '../vote';
import Chart from '../chart/chart'; //+
import Diagram from '../diagram';
import Activity from '../activity';

import './app.sass';

export default class App extends Component {
    render() {
        return(
            <div className="app"> 
                <VoteResult />
            </div>
        )
    }
}