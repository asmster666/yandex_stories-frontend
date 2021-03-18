import React, {useEffect} from 'react';
import ResponseWork from './response_work';
import '../vote/vote.sass';

const VoteRender = () => {

    let alias = "vote";
    let data = {};

    data = ResponseWork(alias, data);
    
    useEffect(() => {wrapCoderItem(data.users)});   
    
    return(
        <div id="vote">
            <h1 id="vote_h1">{data.title}</h1>
            <p id="vote_p">{data.subtitle}</p>   
    
            <div className="coders"></div>
        </div>
    )
    
}

function wrapCoderItem(array) {
    let values = [];
    let main_wrapper = document.querySelector(".coders");

    let column1 = document.createElement("div");
    column1.classList.add("first_column");
    main_wrapper.appendChild(column1);

    let column2 = document.createElement("div");
    column2.classList.add("second_column"); 
    secondColumnThings(column2);
    main_wrapper.appendChild(column2);

    let column3 = document.createElement("div");
    column3.classList.add("third_column");
    main_wrapper.appendChild(column3);

    array.forEach(item => {
        item.forEach(coder => {
            let coder_item = document.createElement("div");
            coder_item.innerHTML = `
                <div className="pic">${coder.avatar}</div>
                <p>${coder.name}</p>
            `;
            coder_item.classList.add("coder_item");
            coder_item.classList.add(`${getCompareParameter(coder.valueText, values)}`);

            if(window.innerWidth > window.innerHeight) {
                displayParticipants(values, coder_item, 6);
                addToColumns(values, coder_item, 6, column1, column3);
            } else {
                if(window.innerWidth < window.innerHeight) {
                    displayParticipants(values, coder_item, 8);
                    addToColumns(values, coder_item, 8, column1, column3, column2);
                }
            }
        })
    });
    console.log(values);
};

function getCompareParameter(parameter, array) {
    let number = parameter.substr(0, 2);
    let result = parseInt(number.trim());

    array.push(result);

    return result;
};

function displayParticipants(array, item, scale_length) {
    array.sort((value1, value2) => value2[0] - value1[0]);
    array.splice(scale_length, (array.length - scale_length));

    for(let i = 0; i < array.length; i++) {
        if(item.classList.contains(array[i])) {
            item.style = "display: block;";
            item.classList.add(`item${1 + i}`);
        } else {
            item.style = "display: none;"
        }
    }
};

function addToColumns(array, item, scale_length, column1, column3, column2) {
    let clas = item.classList;

    if(scale_length === 6) {
        for(let i = 0; i < array.length; i++) {
            if(clas.contains('item1') ||
                clas.contains('item2') || 
                clas.contains('item5')) {
                    column1.appendChild(item);
            }

            if(clas.contains('item3') ||
                clas.contains('item4') || 
                clas.contains('item6')) {
                    column3.appendChild(item);
            }
        }
    }

    if(scale_length === 8) {
        for(let i = 0; i < array.length; i++) {
            if(clas.contains('item1') ||
                clas.contains('item4') || 
                clas.contains('item7')) {
                    column1.appendChild(item);
            }

            if(clas.contains('item2')){
                column2.firstChild.appendChild(item);
            }

            if(clas.contains('item5')) {
                column2.lastChild.appendChild(item); 
            }

            if(clas.contains('item3') ||
                clas.contains('item6') || 
                clas.contains('item8')) {
                    column3.appendChild(item);
            }
        }
    }
};

function secondColumnThings(column2) {
    let upWrap = document.createElement("div");
    upWrap.classList.add("up_wrap");
    let buttonUp = document.createElement("div");
    buttonUp.innerHTML = `
        <div className="first_cirle">
            <div className="second_cirle">
                <div className="svg"></div>
            </div>
        </div>
    `;
    buttonUp.classList.add("button_up");
    upWrap.appendChild(buttonUp);
    column2.appendChild(upWrap);

    let downWrap = document.createElement("div");
    downWrap.classList.add("down_wrap");
    let buttonDown = document.createElement("div");
    buttonDown.innerHTML = `
        <div className="first_cirle">
            <div className="second_cirle">
                <div className="svg"></div>
            </div>
        </div>
    `;
    buttonDown.classList.add("button_down");
    downWrap.appendChild(buttonDown);
    column2.appendChild(downWrap);
}

export default VoteRender;
