import React, {Component} from 'react';
import './leaders.sass';

export default class Leaders extends Component {

    toggleTheme() {
        let wrap = document.querySelector("#leaders");
        let winners = document.querySelector(".winners");
        if(wrap.classList.contains("theme_light")) { 
            wrap.classList.add("theme_dark"); 
            winners.classList.add("leaders_dark");

            wrap.classList.remove("theme_light");
            winners.classList.remove("leaders_light"); 
        } else {
            wrap.classList.add("theme_light");
            winners.classList.add("leaders_light");
            
            wrap.classList.remove("theme_dark");
            winners.classList.remove("leaders_dark"); 
        }
    }

    render() {
        return (
            <article className="leaders theme_light" onClick={this.toggleTheme}>
                <h1 className="leaders_h1">Больше всего ️коммитов</h1>
                <p className="leaders_p">Спринт № 213</p> 

                <div className="winners leaders_light">
                    <div id="item5" className="winner_item">
                        <div className="wrapper">
                            <div className="emodji">👍</div>
                            <div id="pic5" className="pic"></div>
                            <p>Александр Иванков</p>
                            <div className="age">19</div>
                        </div>
                        <div className="win_place place_5">
                            <div id="num5">5</div> 
                        </div>
                    </div>
                    <div id="item3" className="winner_item">
                        <div className="wrapper">
                            <div id="pic3" className="pic"></div>
                            <p>Дмитрий Андриянов</p>
                            <div className="age">22</div>
                        </div>
                        <div className="win_place place_3">
                            <div id="num3">3</div>
                        </div>
                    </div>
                    <div id="item1" className="winner_item">
                        <div className="wrapper">
                            <div className="emodji">👑</div>
                            <div id="pic1" className="pic"></div>
                            <p>Дарья Ковалева</p>
                            <div className="age">32</div>
                        </div>
                        <div className="win_place place_1">
                            <div id="num1">1</div>
                        </div>
                    </div>
                    <div id="item2" className="winner_item">
                        <div className="wrapper">
                            <div id="pic2" className="pic"></div>
                            <p>Сергей Бережной</p>
                            <div className="age">27</div>
                        </div>
                        <div className="win_place place_2">
                            <div id="num2">2</div>
                        </div>
                    </div>
                    <div id="item4" className="winner_item">
                        <div className="wrapper">
                            <div id="pic4" className="pic"></div>
                            <p>Андрей Мокроусов</p>
                            <div className="age">20</div>
                        </div>
                        <div className="win_place place_4">
                            <div id="num4">4</div>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}