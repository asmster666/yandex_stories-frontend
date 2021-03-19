import React, {Component} from 'react';
import './vote.sass';

export default class Vote extends Component {

    toggleTheme() {
        let wrap = document.querySelector("#vote");
        let codersVote = document.querySelector(".coders");
        if(wrap.classList.contains("theme_light")) {
            wrap.classList.add("theme_dark");
            codersVote.classList.add("coders_vote_dark");

            wrap.classList.remove("theme_light");
            codersVote.classList.remove("coders_vote_light"); 
        } else {
            wrap.classList.add("theme_light");
            codersVote.classList.add("coders_vote_light");
            
            wrap.classList.remove("theme_dark");
            codersVote.classList.remove("coders_vote_dark");
        }
    }

    render() {
        return(
            <div id="vote" className="theme_light" onClick={this.toggleTheme}>
                <h1 id="vote_h1">Самый 🔎 внимательный разработчик</h1>
                <p id="vote_p">Спринт № 213</p>   

                <div className="coders coders_vote_light">
                    <div className="first_column">
                        <div className="item1 coder_item">
                            <div id="pic1" className="pic"></div>
                            <p>Евгений Дементьев</p>
                        </div>
                        <div className="item2 coder_item">
                            <div id="pic2" className="pic"></div>
                            <p>Алексей Ярошевич</p>
                        </div>
                        <div className="item3 coder_item">
                            <div id="pic3" className="pic"></div>
                            <p>Александр Николаичев</p>
                        </div>
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
                            <div className="item4 coder_item">
                                <div className="emodji">👍</div>
                                <div className="gold_wrap pic_wrapper">
                                    <div id="pic4" className="pic"></div>
                                    <p>Вадим Пацев</p>
                                </div>
                            </div>
                        </div>
                        <div className="down_wrap">
                            <div className="item5 coder_item">
                                <div className="grey_wrap pic_wrapper">
                                    <div id="pic5" className="pic"></div> 
                                    <p>Юрий Фролов</p>
                                </div>
                            </div>
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
                        <div className="item6 coder_item">
                            <div id="pic6" className="pic"></div>
                            <p>Яна Берникова</p>
                        </div>
                        <div className="item7 coder_item">
                            <div id="pic7" className="pic"></div>
                            <p>Александр Шлейко</p>
                        </div>
                        <div className="item8 coder_item">
                            <div id="pic8" className="pic"></div>
                            <p>Андрей Мокроусов</p>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}