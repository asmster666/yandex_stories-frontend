import React, { useState } from 'react';
import ResponseWork from '../../../response_work';
import LeaderItem from '../leaders/leaderItem/leaderItem';

const Leaders = () => {
    let alias = "leaders"; 
    let data = {};

    let leaders = ResponseWork(alias, data);

    const [lightTheme, toggleTheme] = useState(false);

    return (
        <div 
            className={`container ${lightTheme ? "theme_light" : "theme_dark"}`}
            onClick={() => toggleTheme(!lightTheme)}
        >
            <h2 className={`h2_styles ${lightTheme ? '' : 'h2_dark'}`}>Больше всего ️коммитов{leaders.title}</h2>
            <p className={`p_styles ${lightTheme ? 'p_light' : 'p_dark'}`}>Спринт № 213{leaders.subtitle}</p> 

            <div className={`winners ${lightTheme ? 'leaders_light' : 'leaders_dark'}`}>
                { leaders.users.map(user => (
                    <LeaderItem key={user.name} emodji={user.emodji} name={user.name} age={user.age} place={user.place} />
                ))}
            </div>
        </div>
    )
}

export default Leaders;