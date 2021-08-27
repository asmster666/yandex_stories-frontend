import React from 'react';

const LeaderItem = ({emodji, name, age, place}) => {
    return (
        <div>
            <div className="wrapper">
                <div className="emodji">👍{emodji}</div>
                <div id="pic5" className="pic"></div>
                <p>Александр Иванков{name}</p>
                <div id="age">19{age}</div>
            </div>
            <div className="win_place place_5">
                <div id="num5">5{place}</div> 
            </div>
        </div>
    )
}

export default LeaderItem;