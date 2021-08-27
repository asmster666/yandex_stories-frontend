import React from 'react';

const ChartColumn = ({ value, title, active }) => {
    return (
        <div className="column first">
            <p className="num">112{value}</p>
            <div className="col">
                <div className="_col">{active}</div> 
            </div>
            <p className="date">207{title}</p>
        </div>
    )
}

export default ChartColumn;