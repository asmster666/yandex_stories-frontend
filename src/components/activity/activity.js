import React, { useState, useEffect } from 'react';
import ResponseWork from '../../../response_work';

const Activity = ({ dataPerDayOfWeek } ) => {

    let alias = "activity";
    let data = {};

    let activity = ResponseWork(alias, data);

    const [lightTheme, toggleTheme] = useState(false);
    const [keys, setKeys] = useState([]);
    const [values, setValues] = useState([]);
    const [map, setMap] = useState([]);

    const [array1, setArray1] = useState([]);
    const [array2, setArray2] = useState([]);

    useEffect(() => {
        setKeys(Object.keys(dataPerDayOfWeek));
        setValues(Object.entries(dataPerDayOfWeek).map(([key, value]) => ({ [key]: value })));
    }, []);  // componentdidmount

    useEffect(() => {
        if(window.screen.height > window.screen.width) {
            buildVerticalGrid();
        } else {
            buildGorizontalGrid();
        }
    });   // check it works as componentdidupdate

    return (
        <div id="activity"
            className={lightTheme ? "theme_light" : "theme_dark"}
            onClick={() => toggleTheme(!lightTheme)}
        >
            <h1 id="activity_h1">{activity.title}</h1>
            <p id="activity_p">{activity.subtitle}</p>

            <div id="grid"></div> 
        </div>
    )
}

function buildVerticalGrid(keys, arr1, setArr1, arr2, map) {
    const grid_container = document.querySelector(".activeGrid");
    console.log("vert grid");

    keys.map((i, key) => {
        vertGridColRender(i);
        setArr1(arr => arr + vertGridColRender(i));
    })

    for(let a = 0; a < arr1.length; a++) {
        let res_mon = Object.values(map[a]);
        let delWrap = delWrapCreator();
        res_mon.forEach(elem => {
            elem.forEach(val => {
                cellCreator(val);
            })
        })

    }

};

function vertGridColRender(ind) {
    return (
        <div className={`column addition ${ind}`}></div>
    )
}

function delWrapCreator() {
    return (
        <div className="del_wrap"></div>
    )
}

function cellCreator(val) {
    return(
        <div className="cell">{val}</div>
    )
}

function arr20 () {
    return (
        <div className="wrap4">
            <div id="big_cell4"></div>
            <div id="lil_cell4"></div>
            <div id="lil_cell_24"></div>
        </div>
    )
}

function arr212() {
    return (
        <div className="wrap2">
            <div id="big_cell2"></div>
            <div id="lil_cell2"></div>
            <div id="lil_cell_22"></div>
        </div>
    )
}

function arr234() {
    return (
        <div className="wrap3">
            <div id="big_cell3"></div>
            <div id="lil_cell3"></div>
            <div id="lil_cell_23"></div>
        </div>
    )
}

function arr256() {
    return (
        <div className="wrap">
            <div id="big_cell"></div>
            <div id="lil_cell"></div>
            <div id="lil_cell_2"></div>
        </div>
    )
}

function buildGorizontalGrid(arr1, arr2) {
    console.log("goriz grid");
};

export default Activity;