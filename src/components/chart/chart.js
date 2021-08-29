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
        <div 
            className={`chart container ${lightTheme ? "theme_light" : "theme_dark"}`}
            onClick={() => toggleTheme(!lightTheme)}
        >
            <h1 className={`h2_styles ${lightTheme ? '' : 'h2_dark'}`}>Коммиты{chart.title}</h1>
            <p className={`p_styles ${lightTheme ? 'p_light' : 'p_dark'}`}>Спринт № 213{chart.subtitle}</p>

            <div className={`columns ${lightTheme ? "columns_light" : "columns_dark"}`}>
                {
                    chart.values.map(chartItem => (
                        <ChartColumn value={chartItem.value} title={chartItem.title} active={chartItem.active} />
                    ))
                }
            </div>

            <div className={`users ${lightTheme ? "users_light" : "users_dark"}` }>
                {
                    chart.users.map(user => (
                        <ChartUser avatar={user.avatar} name={user.name} valueText={user.valueText} />
                    ))
                }
            </div>
        </div>
    )
}

export default Chart;