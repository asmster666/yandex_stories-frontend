import React from 'react';

const VoteUser = ({ avatar, name }) => {
    return (
        <div className="item1 coder_item">
            <div id="pic1" className="pic">{avatar}</div>
            <p>Евгений Дементьев{name}</p>
        </div>
    )
}

export default VoteUser;