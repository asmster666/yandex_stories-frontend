import React, {useEffect} from 'react';
import ResponseWork from './response_work';
import '../chart/chart.sass';

const ChartRender = () => {
    let alias = "chart";
    let data = {};

    data = ResponseWork(alias, data);
    
    useEffect(() => {wrapChart(data.values); wrapChartUsers(data.users)});

    return(
        <div id="chart">
            <h1 id="chart_h1">Коммиты</h1>
            <p id="chart_p">Спринт № 213</p> 

            <div className="columns"></div>

            <div className="users"></div>
        </div>
    )
}

function wrapChart(array) {
    let main_wrapper = document.querySelector(".columns");
    main_wrapper.style = "flex-direction: column;";
    array.forEach(elem => {
        elem.forEach(chart => {
            main_wrapper.innerHTML = `${chart.title}`;
            console.log(chart);
        })
    });
};

function wrapChartUsers(array) {
    let main_wrapper = document.querySelector(".users");
    main_wrapper.style = "flex-direction: column;";
    array.forEach(elem => {
        elem.forEach(user => {
            main_wrapper.innerHTML = `${user.name}`;
            console.log(user);
        })
    });
};

export default ChartRender;