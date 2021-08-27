import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Leaders from '../leaders/leaders';
import Chart from '../chart/chart';
import Vote from '../vote/vote';
import Diagram from '../diagram/diagram';
import Activity from '../activity/activity';

const App = () => {
    return (
        <div>
            <Router>
                <Route path={'/'} exact component={Leaders}></Route>
                <Route path={'/chart'} component={Chart}></Route>
                <Route path={'/vote'} component={Vote}></Route>
                <Route path={'/diagram'} component={Diagram}></Route>
                <Route path={'/activity'} component={Activity}></Route>
            </Router>
        </div>
    )
}

export default App;