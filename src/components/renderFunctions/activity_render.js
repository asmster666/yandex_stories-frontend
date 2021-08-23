import React, {useEffect} from 'react';
import ResponseWork from './response_work';
import '../activity/activity.sass';

const ActivityRender = () => {
    let alias = "activity"; 
    let data = {};

    data = ResponseWork(alias, data);
    
    useEffect(() => {wrapActivity(data.data)});

    return(
        <div id="activity">
            <h1 id="activity_h1">{data.title}</h1>
            <p id="activity_p">{data.subtitle}</p>  

            <div id="grid"></div>
        </div>
    )
}

function wrapActivity(object) {
    let main = document.querySelector("#grid");

    for(let day of object) {
        main.innerHTML = `
            monday: ${day.mon} <br>
            tuesday: ${day.tue} <br>
            wednesday: ${day.wed} <br>
            thursday: ${day.thu} <br>
            friday: ${day.fri} <br>
            saturday: ${day.sat} <br>
            sunday: ${day.sun} <br>
        `;
    }
}

export default ActivityRender; 