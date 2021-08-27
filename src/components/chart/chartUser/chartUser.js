import React from 'react';

const ChartUser = ({ avatar, name, valueText }) => {
    return (
        <div className="user first_user">
            <div className="pic">{avatar}</div>
            <div className="info_wrap">
                <p id="name">Дарья Ковалева{name}</p>
                <div id="age">32{valueText}</div>
            </div>
        </div>
    )
}

export default ChartUser;