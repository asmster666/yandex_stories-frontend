import React, {useEffect} from 'react';
import ResponseWork from './response_work';
import '../diagram/diagram.sass';

const DiagramRender = () => {
    let alias = "diagram";
    let data = {};

    data = ResponseWork(alias, data);
    
    useEffect(() => {wrapDiagram(data.categories)});

    return(
        <div id="diagram">
            <h1 id="diagram_h1">{data.title}</h1>
            <p id="diagram_p">{data.subtitle}</p> 

            <div className="diagram">
                <div className="out_circle">
                    <div className="first_piece">
                        <div className="side_part left"></div>
                        <div className="round_part"></div>
                        <div className="side_part right"></div>
                        <div className="color_cov"></div>
                    </div>
                    <div className="second_piece">
                        <div className="side_part left"></div>
                        <div className="round_part"></div>
                        <div className="side_part right"></div>
                        <div className="color_cov"></div>
                    </div>
                    <div className="third_piece">
                        <div className="side_part left"></div>
                        <div className="round_part"></div>
                        <div className="side_part right"></div>
                        <div className="color_cov"></div>
                    </div>
                    <div className="forth_piece">
                        <div className="side_part left"></div>
                        <div className="round_part"></div>
                        <div className="side_part right"></div>
                        <div className="color_cov"></div>
                    </div>
                </div>
                <div className="white_circle">
                    <div className="center">
                        <h1>{data.totalText}</h1>
                        <p>{data.differenceText}</p> 
                    </div>
                </div>
            </div>

            <div className="stat"></div> 
        </div>
    )
}

function wrapDiagram(array) {
    let stat = document.querySelector(".stat");

    array.forEach(item => {
        item.forEach(categ => {
            let statItem = document.createElement("div");
            statItem.innerHTML = `
                <div className="first color"></div>
                <div className="str"> ${categ.title}</div>
                <div className="count_wrap">
                    <div className="counter c_1">+${getValueForm(categ.differenceText)}</div>
                    <div className="counter c_2">${getValueForm(categ.valueText)}</div>
                </div>
            `;
            statItem.classList.add("stat_item");
            stat.appendChild(statItem);
        })
    });
};

function getValueForm(parameter) {
    let number = parameter.substr(0, 3);
    let result = parseInt(number.trim());

    return result;
}

export default DiagramRender;  