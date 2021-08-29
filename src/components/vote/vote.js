import React, { useState, useEffect } from 'react';
import ResponseWork from '../../../response_work';
import VoteUser from './voteUser/voteUser';

const Vote = () => {

    let alias = "leaders"; 
    let data = {};

    let vote = ResponseWork(alias, data);
    let usersArray = vote.users;

    const [lightTheme, toggleTheme] = useState(false);

    useEffect(() => createRenderArrays(usersArray), [usersArray])

    return (
        <div
            className={`container ${lightTheme ? "theme_light" : "theme_dark"}`}
            onClick={() => toggleTheme(!lightTheme)}
        >
            <h2 className={`h2_styles ${lightTheme ? '' : 'h2_dark'}`}>Самый 🔎 внимательный разработчик{vote.title}</h2>
            <p className={`p_styles ${lightTheme ? 'p_light' : 'p_dark'}`}>Спринт № 213{vote.subtitle}</p>  

            <div className={`coders ${lightTheme ? 'vote_light' : 'vote_dark'}`}>
                <div className="first_column">
                    {
                        createRenderArrays(usersArray).firstColArr.map(user => (
                            <VoteUser avatar={user.avatar} name={user.name} />
                        ))
                    }
                </div>
                <div className="second_column">
                    <div className="up_wrap">
                        <div className="button_up">
                            <div className="first_cirle">
                                <div className="second_cirle">
                                    <div className="svg"></div>
                                </div>
                            </div>
                        </div>
                        {/* gold wrap */}
                        {
                            createRenderArrays(usersArray).forthElem.map(user => (
                                <VoteUser avatar={user.avatar} name={user.name} />
                            ))
                        }
                    </div>
                    <div className="down_wrap">
                        {/* grey wrap */}
                        {
                            createRenderArrays(usersArray).fifthElem.map(user => (
                                <VoteUser avatar={user.avatar} name={user.name} />
                            ))
                        }
                        <div className="button_down">
                            <div className="first_cirle">
                                <div className="second_cirle">
                                    <div className="svg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third_column">
                    {
                        createRenderArrays(usersArray).secondColArr.map(user => (
                            <VoteUser avatar={user.avatar} name={user.name}  />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

function createRenderArrays(array) {
    let firstColArr = [], 
        forthElem = [], 
        fifthElem = [],
        secondColArr= [];
    
    array.map((index, item) => {
        if(index < 4) {
            firstColArr.push(item);
        } else {
            if(index > 2 && index < 5) {
                forthElem.push(item);
            } else {
                if(index > 4 && index < 6) {
                    fifthElem.push(item);
                } else {
                    secondColArr.push(item);
                }
            }
        }

        return { firstColArr, forthElem, fifthElem, secondColArr };

    });
};

export default Vote;