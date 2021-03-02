import React, {Component} from 'react';
import './vote_result.sass';

export default class VoteResult extends Component {
    render() {
        return (
            <div id="vote_result">
                <h1>Самый 🔎 внимательный разработчик</h1>
                <p>Спринт № 213</p> 

                <div className="winners">
                    <div id="fifth" className="winner_item">
                        <div className="wrapper">
                            <div className="emodji">👍</div>
                            <div id="pic5" className="pic"></div>
                            <p>Юрий Фролов</p>
                            <div id="votes">15 голосов</div>
                            <hr />
                            <div id="num5">5</div>
                        </div>
                    </div>
                    <div id="third" className="winner_item">
                        <div className="wrapper">
                            <div id="pic3" className="pic"></div>
                            <p>Яна Берникова</p>
                            <div id="votes">17 голосов</div>
                        </div>
                        <div className="win_place third_place">
                            <div id="num3">3</div>
                        </div>
                    </div>
                    <div id="first" className="winner_item">
                        <div className="wrapper">
                            <div className="emodji">👑</div>
                            <div id="pic1" className="pic"></div>
                            <p>Евгений Дементьев</p>
                            <div id="votes">22 голоса</div>
                        </div>
                        <div className="win_place first_place">
                            <div id="num1">1</div>
                        </div>
                    </div>
                    <div id="second" className="winner_item">
                        <div className="wrapper">
                            <div id="pic2" className="pic"></div>
                            <p>Вадим Пацев</p>
                            <div id="votes">19 голосов</div>
                        </div>
                        <div className="win_place second_place">
                            <div id="num2">2</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}