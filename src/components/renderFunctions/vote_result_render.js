import React, {useEffect} from 'react';
import ResponseWork from './response_work';
import '../vote/vote_result.sass';

const VoteResultRender = () => {
    let alias = "vote";
    let data = {};

    data = ResponseWork(alias, data);
    
    useEffect(() => {wrapCoderItem(data.users)});

    return(
        <div id="vote_result"></div>
    )
}

export default VoteResultRender;