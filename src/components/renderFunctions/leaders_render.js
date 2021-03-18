import React, {useEffect} from 'react';
import ResponseWork from './response_work';
import '../leaders/leaders.sass';

const LeadersRender = () => {
    let alias = "leaders";
    let data = {};

    data = ResponseWork(alias, data);
    
    useEffect(() => {wrapItem(data.users)}); 

    return (
        <div id="leaders">
            <h1 id="leaders_h1">{data.title}</h1>
            <p id="leaders_p">{data.subtitle}</p>

            <div className="winners"></div>
        </div>
    )
}

function wrapItem(array) {
    let array_values = [];
    let main_wrapper = document.querySelector(".winners");

    array.forEach(item => {
        item.forEach(winner => {
            let winner_item = document.createElement("div");
            winner_item.innerHTML = `
                <div className="wrapper">
                    <div className="emodji">👍</div>
                    <div className="pic" style="background-image: url(${winner.avatar})"></div>
                    <p>${winner.name}</p>
                    <div id="age">${winner.valueText}</div>
                </div>
                <div className="win_place place_5">
                    <div id="num5">${getCompareValue(winner.valueText, array_values)}</div>
                </div>
            `;
            winner_item.classList.add("winner_item");
            winner_item.classList.add(`${getCompareValue(winner.valueText, array_values)}`);

            if(window.innerWidth > window.innerHeight) {
                getWinPlace(array_values, winner_item, 0); 
            } else {
                if(window.innerWidth < window.innerHeight) {
                    getWinPlace(array_values, winner_item, 5);
                }
            }

            main_wrapper.appendChild(winner_item);
        });
    });
};

function getCompareValue(value, array) {
    let number = value.substr(0, 2);
    let result = parseInt(number.trim());

    array.push(result);

    return result;
};

function getWinPlace(array, item, scale_length) {
    array.sort((value1, value2) => value2[0] - value1[0]);
    array.splice(scale_length);

    for(let i = 0; i < array.length; i++) {
        if(item.classList.contains(array[i])) {
            item.style = "display: block;";
            item.classList.add(`item${1 + i}`);
        } else {
            item.style = "display: none;"
        }
    }
}

export default LeadersRender;