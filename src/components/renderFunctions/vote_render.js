import React, {useEffect} from 'react';
import ResponseWork from './response_work';
import '../vote/vote.sass';

const VoteRender = () => {

    let alias = "vote";
    let data = {};

    data = ResponseWork(alias, data);

    //showParticipants('', data.users);
    
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
    let main_wrapper = document.querySelector(".coders");
    array.forEach(item => {
        item.forEach(coder => {
            let coder_item = document.createElement("div");
            coder_item.innerHTML = `
                <div className="pic">${coder.avatar}</div>
                <p>${coder.name}</p>
            `;
            coder_item.classList.add("coder_item");
            coder_item.classList.add(`${coder.id}`);
            main_wrapper.appendChild(coder_item);
        })
    });
};

function showParticipants(parameter, parent) {
    // show just 8 first by votes
    let array = [];

    let number = parameter.substr(0, 2);
    let result = parseInt(number.trim());
    console.log(result);

    array.push(result);
    array.sort();
    array.splice(8, array.length - 8);

    parent.push(array);
};

export default VoteRender;
