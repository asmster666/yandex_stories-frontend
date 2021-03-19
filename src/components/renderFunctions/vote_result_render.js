import React, {useEffect} from 'react';
import ResponseWork from './response_work';
import '../vote/vote_result.sass';

const VoteResultRender = () => {
    let alias = "leaders";
    let data = {};

    data = ResponseWork(alias, data);
    
    useEffect(() => {wrapResultItem(data.users)});

    return(
        <div id="vote_result">
            <h1 id="vote_result_h1">{data.title}</h1>
            <p id="vote_result_p">{data.subtitle}</p> 

            <div className="winners"></div>
        </div>
    )
}

function wrapResultItem(array) {
    let array_values = [];
    let kids_array = [];
    let main_wrapper = document.querySelector(".winners");
    let emoji_field = main_wrapper.firstChild;
    emoji_field.style = "display: none;";

    array.forEach(item => {
        item.forEach(winner => {
            let winner_item = document.createElement("div");
            let winner_item_wrap = document.createElement("div");
            winner_item_wrap.innerHTML = `
                <div className="pic" style="background-image: url(${winner.avatar})"></div>
                <p>${winner.name}</p>
                <div id="age">${winner.valueText}</div>
            `; 
            winner_item.classList.add("winner_item");
            winner_item_wrap.classList.add("wrapper");
            winner_item.appendChild(winner_item_wrap);

            winner_item.classList.add(`${getCompareValue(winner.valueText, array_values)}`);

            if(window.innerWidth > window.innerHeight) {
                displayWinners(array_values, kids_array, winner_item); 
                getWinPlace(array_values, winner_item);
            } else {
                if(window.innerWidth < window.innerHeight) {
                    displayWinners(array_values, kids_array, winner_item, 3);
                    getWinPlace(array_values, winner_item);
                }
            }
            console.log(kids_array);

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

function displayWinners(array, array_kids, item, scale_length) {
    array.sort((val1, val2) => val2[0] - val1[0]);
    array.splice(scale_length, array.length - scale_length);

    for(let i = 0; i < array.length; i++) {
        if(item.classList.contains(array[i])) {
            item.style = "display: block;";
            item.classList.add(`item${1 + i}`);
            array_kids.push(item);
        } else {
            item.style = "display: none;"
        }
    }
};

function getWinPlace(array, item) {
    for(let i = 0; i < array.length; i++) {
        if(item.classList.contains(`item${1 + i}`)) {
            let win_place = document.createElement("div");
            win_place.innerHTML = `
                <div id=num${1 + i}>${1 + i}</div>
            `;
            win_place.classList.add("win_place");
            win_place.classList.add(`place_${1 + i}`);
            item.appendChild(win_place);
        }
    }
};

export default VoteResultRender;