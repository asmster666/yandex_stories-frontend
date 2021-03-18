import React, {useEffect} from 'react';
import ResponseWork from './response_work';
import '../diagram/diagram.sass';

const DiagramRender = () => {
    let alias = "diagram";
    let data = {};

    data = ResponseWork(alias, data);
    
    useEffect(() => {wrapCoderItem(data.users)});

    return(
        <div id="diagram"></div>
    )
}

export default DiagramRender;