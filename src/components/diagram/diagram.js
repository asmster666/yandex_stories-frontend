import React, { useState } from 'react';
import ResponseWork from '../../../response_work';
import DiagramCategory from './diagramCategory/diagramCategory';
import DiagramPiece from './diagramPiece/diagramPiece';

const Diagram = () => {

    let alias = "diagram";
    let data = {};
    let diagramColors = ['first_piece', 'second_piece', 'third_piece', 'forth_piece'];

    let diagram = ResponseWork(alias, data);

    const [lightTheme, toggleTheme] = useState(false);

    return (
        <div id="diagram"
            className={lightTheme ? "theme_light" : "theme_dark"}
            onClick={() => toggleTheme(!lightTheme)}
        >
            <h1 id="diagram_h1">{diagram.title}</h1>
            <p id="diagram_p">{diagram.subtitle}</p> 

            <div className="diagram">
                {
                    diagramColors.map(diagrClass => (
                        <DiagramPiece diagrClass={diagrClass.diagrClass} />
                    ))
                }
                <div className="white_circle">
                    <div className="center">
                        <h1>{diagram.totalText}</h1>
                        <p>{diagram.differenceText}</p> 
                    </div>
                </div>
            </div>

            <div className="stat">
                {
                    diagram.categories.map(categ => (
                        <DiagramCategory title={categ.title} diffText={categ.differenceText} valueText={categ.valueText} />
                    ))
                }
            </div> 
        </div>
    )
}

export default Diagram;