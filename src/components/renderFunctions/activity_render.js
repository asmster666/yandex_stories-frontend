import React, {useEffect} from 'react';
import ResponseWork from './response_work';
import '../activity/activity.sass';

const ActivityRender = () => {
    let alias = "activity";
    let data = {};

    data = ResponseWork(alias, data);
    
    useEffect(() => {wrapCoderItem(data.users)});

    return(
        <div id="activity"></div>
    )
}

export default ActivityRender;