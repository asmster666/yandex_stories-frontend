import React, {useEffect} from 'react';
import ResponseWork from './response_work';
import '../chart/chart.sass';

const ChartRender = () => {
    let alias = "vote";
    let data = {};

    data = ResponseWork(alias, data);
    
    useEffect(() => {wrapCoderItem(data.users)});

    return(
        <div id="chart"></div>
    )
}

export default ChartRender;