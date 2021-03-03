import React, {Component} from 'react';
import './vote.sass';

export default class Vote extends Component {
    render() {
        return(
            <div id="vote">
                <h1 id="vote_h1">Самый 🔎 внимательный разработчик</h1>
                <p id="vote_p">Спринт № 213</p>   

                <div className="coders">
                    <div className="first_column">
                        <div className="first coder_item">
                            <div id="pic1" className="pic"></div>
                            <p>Евгений Дементьев</p>
                        </div>
                        <div className="second coder_item">
                            <div id="pic2" className="pic"></div>
                            <p>Алексей Ярошевич</p>
                        </div>
                        <div className="third coder_item">
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
                            <div className="forth coder_item">
                                <div className="emodji">👍</div>
                                <div className="gold_wrap pic_wrapper">
                                    <div id="pic4" className="pic"></div>
                                    <p>Вадим Пацев</p>
                                </div>
                            </div>
                        </div>
                        <div className="down_wrap">
                            <div className="fifth coder_item">
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
                        <div className="six coder_item">
                            <div id="pic6" className="pic"></div>
                            <p>Яна Берникова</p>
                        </div>
                        <div className="seven coder_item">
                            <div id="pic7" className="pic"></div>
                            <p>Александр Шлейко</p>
                        </div>
                        <div className="eight coder_item">
                            <div id="pic8" className="pic"></div>
                            <p>Андрей Мокроусов</p>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}