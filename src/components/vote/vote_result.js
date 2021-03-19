import React, {Component} from 'react';
import './vote_result.sass';

export default class VoteResult extends Component {

    renderVoteResult(alias, data) {
        console.log(`${alias} ${data}`);
    }

    render() {
        return (
            <div id="vote_result" onLoad={this.renderVoteResult("it will be", "vote results")}>
                <h1 id="vote_result_h1">Самый 🔎 внимательный разработчик</h1>
                <p id="vote_result_p">Спринт № 213</p> 

                <div className="winners">
                    <div id="item5_v" className="winner_item">
                        <div className="wrapper">
                            <div className="emodji">👍</div>
                            <div id="pic5" className="pic"></div>
                            <p>Юрий Фролов</p>
                            <div id="votes">15 голосов</div>
                            <hr />
                            <div id="num5">5</div>
                        </div>
                     </div>
                    <div id="item3" className="winner_item">
                        <div className="wrapper">
                            <div id="pic3" className="pic"></div>
                            <p>Яна Берникова</p>
                            <div id="votes">17 голосов</div>
                        </div>
                        <div className="win_place place_3">
                            <div id="num3">3</div>
                        </div>
                    </div>
                    <div id="item1" className="winner_item">
                        <div className="wrapper">
                            <div className="emodji">👑</div>
                            <div id="pic1" className="pic"></div>
                            <p>Евгений Дементьев</p>
                            <div id="votes">22 голоса</div>
                        </div>
                        <div className="win_place place_1">
                            <div id="num1">1</div>
                        </div>
                    </div>
                    <div id="item2" className="winner_item">
                        <div className="wrapper">
                            <div id="pic2" className="pic"></div>
                            <p>Вадим Пацев</p>
                            <div id="votes">19 голосов</div>
                        </div>
                        <div className="win_place place_2">
                            <div id="num2">2</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}