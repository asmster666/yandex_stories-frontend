import React, {Component} from 'react';
import './diagram.sass';

export default class Diagram extends Component {
    render() {
        return(
            <div id="diagram">
                <h1 id="diagram_h1">Размер коммитов</h1>
                <p id="diagram_p">Спринт № 213</p> 

                <div className="diagram">
                    <div className="out_circle">
                        <div className="first_piece">
                            <div className="side_part left"></div>
                            <div className="round_part"></div>
                            <div className="side_part right"></div>
                            <div className="color_cov"></div>
                        </div>
                        <div className="second_piece">
                            <div className="side_part left"></div>
                            <div className="round_part"></div>
                            <div className="side_part right"></div>
                            <div className="color_cov"></div>
                        </div>
                        <div className="third_piece">
                            <div className="side_part left"></div>
                            <div className="round_part"></div>
                            <div className="side_part right"></div>
                            <div className="color_cov"></div>
                        </div>
                        <div className="forth_piece">
                            <div className="side_part left"></div>
                            <div className="round_part"></div>
                            <div className="side_part right"></div>
                            <div className="color_cov"></div>
                        </div>
                    </div>
                    <div className="white_circle">
                        <div className="center">
                            <h1>182 коммита</h1>
                            <p>+42 с прошлого спринта</p>
                        </div>
                    </div>
                </div>

                <div className="stat">
                    <div className="stat_item">
                        <div className="first color"></div>
                        <div className="str"> > 1001 строки</div>
                        <div className="count_wrap">
                            <div className="counter c_1">+8</div>
                            <div className="counter c_2">30</div>
                        </div>
                    </div>
                    <hr />
                    <div className="stat_item">
                        <div className="second color"></div>
                        <div className="str">501 — 1000 строк</div>
                        <div className="count_wrap">
                            <div className="counter c_1">+6</div>
                            <div className="counter c_2">32</div>
                        </div>
                    </div>
                    <hr />
                    <div className="stat_item">
                        <div className="third color"></div>
                        <div className="str">101 — 500 строк</div>
                        <div className="count_wrap">
                            <div className="counter c_1">+16</div>
                            <div className="counter c_2">58</div>
                        </div>
                    </div>
                    <hr />
                    <div className="stat_item">
                        <div className="forth color"></div>
                        <div className="str">1 — 100 строк</div>
                        <div  className="count_wrap">
                            <div className="counter c_1">+12</div>
                            <div className="counter c_2">52</div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}