import React from 'react';

const DiagramCategory = ({ title, diffText, valueText }) => {
    return (
        <div className="stat_item">
            <div className="first color"></div>
            <div className="str"> > 1001 строки{title}</div>
            <div className="count_wrap">
                <div className="counter c_1">+8{diffText}</div>
                <div className="counter c_2">30{valueText}</div>
            </div>
        </div>
    )
}

export default DiagramCategory;