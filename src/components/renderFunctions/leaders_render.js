import React, {useEffect} from 'react';
import ResponseWork from './response_work';
import '../leaders/leaders.sass';

const LeadersRender = () => {
    let alias = "leaders";
    let data = {};

    data = ResponseWork(alias, data);
    
    useEffect(() => {
        wrapItem(data.users)
    }); 

    return (
        <div id="leaders">
            <h1 id="leaders_h1">{data.title}</h1>
            <p id="leaders_p">{data.subtitle}</p>

            <div className="winners">
                <div className="emoji">{data.emoji}</div>
            </div>
        </div>
    )
}

function wrapItem(array) {
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
                //winnersRightOrder(kids_array);
            } else {
                if(window.innerWidth < window.innerHeight) {
                    displayWinners(array_values, kids_array, winner_item, 3);
                    getWinPlace(array_values, winner_item);
                    //winnersRightOrder(kids_array);
                }
            }
            console.log(kids_array);
            //addEmoji(winner_item_wrap, emoji_field);

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

function addEmoji(item, emoji) {
    if(item.classList.contains("item1")) {
        emoji.style = "display: block;";
        item.appendChild(emoji);
    }

    if(item.classList.contains("item5")) {
        let new_emoji = document.createTextNode(`👍`);
        emoji.textContent = new_emoji;
        item.appendChild(emoji);
    }
};  // not work properly

// function winnersRightOrder(parent) {
//     let kid1, kid3;
//     for(let i = 0; i < parent.length; i++) {
//         if(parent[i].classList.contains("item1")) {
//             kid1 = parent[i]
//         } 

//         if(parent[i].classList.contains("item3")) {
//             kid3 = parent[i + 1]
//         } 

//         kid1 = parent[i + 1];
//         kid3 = parent[i];
//     }
// }

export default LeadersRender;