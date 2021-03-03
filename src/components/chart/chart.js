import React, {Component} from 'react';
import './chart.sass';

export default class Chart extends Component {
    render() {
        return (
            <div id="chart">
                <h1 id="chart_h1">Коммиты</h1>
                <p id="chart_p">Спринт № 213</p>    

                <div className="columns">
                    <div className="column first">
                        <p className="num">112</p>
                        <div className="col">
                            <div className="_col"></div>
                        </div>
                        <p className="date">207</p>
                    </div>
                    <div className="column second">
                        <p className="num">152</p>
                        <div className="col">
                            <div className="_col"></div>
                        </div>
                        <p className="date">208</p>
                    </div>
                    <div className="column third">
                        <p className="num">128</p>
                        <div className="col">
                            <div className="_col"></div>
                        </div>
                        <p className="date">209</p>
                    </div>
                    <div className="column four">
                        <p className="num">164</p>
                        <div className="col">
                            <div className="_col"></div>
                        </div>
                        <p className="date">210</p>
                    </div>
                    <div className="column five">
                        <p className="num">118</p>
                        <div className="col">
                        <div className="_col"></div>
                        </div>
                        <p className="date">211</p>
                    </div>
                    <div className="column six">
                        <p className="num">140</p>
                        <div className="col">
                            <div className="_col"></div>
                        </div>
                        <p className="date">212</p>
                    </div>
                    <div className="column seven">
                        <p className="black">182</p>
                        <div className="col">
                            <div className="gold"></div>
                        </div>
                        <p className="date">213</p>
                    </div>
                    <div className="column eight">
                        <p className="num">0</p>
                        <div className="col">
                            <div className="_col"></div>
                        </div>
                        <p className="date">214</p>
                    </div>
                    <div className="column nine">
                        <p className="num">0</p>
                        <div className="col">
                            <div className="_col"></div>
                        </div>
                        <p className="date">215</p>
                    </div>
                </div>

                <div className="users">
                    <div className="user first_user">
                        <div className="pic"></div>
                        <div className="info_wrap">
                            <p id="name">Дарья Ковалева</p>
                            <div id="age">32</div>
                        </div>
                    </div>
                    <hr />
                    <div className="user second_user">
                        <div className="pic"></div>
                        <div className="info_wrap">
                            <p id="name">Сергей Бережной</p>
                            <div id="age">27</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}