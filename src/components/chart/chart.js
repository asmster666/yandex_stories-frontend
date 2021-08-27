import React, { useState } from 'react';
import ResponseWork from '../../../response_work';
import ChartColumn from './chartColumn/chartColumn';
import ChartUser from './chartUser/chartUser';

const Chart = () => {

    let alias = "chart";
    let data = {};

    let chart = ResponseWork(alias, data);

    const [lightTheme, toggleTheme] = useState(false);

    return (
        <article id="chart"
            className={lightTheme ? "theme_light" : "theme_dark"}
            onClick={() => toggleTheme(!lightTheme)}
        >
            <h1 id="chart_h1">Коммиты{chart.title}</h1>
            <p id="chart_p">Спринт № 213{chart.subtitle}</p>

            <div className={lightTheme ? "columns columns_light" : "columns columns_dark"}>
                {
                    chart.values.map(chartItem => (
                        <ChartColumn value={chartItem.value} title={chartItem.title} active={chartItem.active} />
                    ))
                }
            </div>

            <div className={lightTheme ? "users users_light" : "users users_dark" }>
                {
                    chart.users.map(user => (
                        <ChartUser avatar={user.avatar} name={user.name} valueText={user.valueText} />
                    ))
                }
            </div>
        </article>
    )
}

export default Chart;