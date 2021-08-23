import React, {Component} from 'react';
import './activity.sass';

export default class Activity extends Component {

    state = {
        keys: [],
        map: []
    }

    getData = () => {
        let data_obj = {
            "mon": [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 3, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            "tue": [0, 0, 0, 0, 1, 0, 0, 0, 0, 5, 0, 4, 0, 0, 0, 0, 1, 0, 3, 0, 0, 2, 1, 0],
            "wed": [1, 0, 0, 0, 1, 0, 5, 0, 0, 4, 0, 0, 0, 5, 0, 2, 1, 0, 0, 0, 0, 0, 0, 1],
            "thu": [0, 1, 0, 1, 0, 0, 0, 0, 6, 0, 1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0],
            "fri": [0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 5, 0, 4, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0],
            "sat": [0, 0, 0, 0, 2, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            "sun": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
        };
    
        let keys = Object.keys(data_obj);
        let  map = Object.entries(data_obj).map(([key, value]) => ({ [key]: value }));

        return {keys, map}; 
    }

    toggleTheme() {
        let wrap = document.querySelector("#grid");
        let grid = document.querySelector(".activeGrid");
        if(wrap.classList.contains("theme_light")) {
            wrap.classList.add("theme_dark");
            grid.classList.add("activity_dark");

            wrap.classList.remove("theme_light");
            grid.classList.remove("activity_light"); 
        } else {
            wrap.classList.add("theme_light");
            grid.classList.add("activity_light");
            
            wrap.classList.remove("theme_dark");
            grid.classList.remove("activity_dark"); 
        }
    }

    getResultArrays = () => {
        let result = this.getData();
        console.log(Object.values(result));
        let arrays = Object.values(result);
        console.log(arrays[1]);
        this.setState(() => ({
            keys: arrays[0],
            map: arrays[1]
        }))
    }

    componentDidMount() {
        this.getResultArrays();
    }

    componentDidUpdate() {
        console.log(this.state.keys, this.state.map);
        if(window.screen.height > window.screen.width) {
            this.buildGridVertical();
            console.log("grid will be vert");
        } else {
            this.buildGridHorizontal();
            console.log("grid will be horiz");
        }
    }

    buildGridVertical() {
        const grid_container = document.querySelector(".activeGrid");
        let array1 = [];
        let array2 = []; 

        for(let i = 0; i < this.state.keys.length; i++) {
            let column = document.createElement("section");
            column.classList.add("column");
            column.classList.add("addition");
            column.classList.add(`${i}`);
            array1.push(column);
        }

        for(let a = 0; a < array1.length; a++) {
            let res_mon = Object.values(this.state.map[a]);
            let kid = document.createElement("div");
            kid.classList.add("del_wrap");
            res_mon.forEach(elem => {
                elem.forEach(value => {
                    let cell = document.createElement("div");
                    cell.classList.add(`${value}`);
                    cell.classList.add("cell");
                    kid.appendChild(cell);
                })
                array1[a].appendChild(kid);
            })
            grid_container.appendChild(array1[a]);
        }
        
        const columns_kids = grid_container.children;

        for(let kid of columns_kids){
            for(let cell of kid.children) {
                for(let k = 0; k < cell.children.length; k++) {
                    cell.children[k].style = `z-index: ${k}`;
                }
                for(let item of cell.children) {
                    array2.push(item);
                }
            }
        }

        for(let i = 0; i < array2.length; i++) {
            let cls = array2[i].classList;

            if(cls.contains("0")) {
                cls.add("wrap4");
                array2[i].innerHTML = `
                    <div id="big_cell4"></div>
                    <div id="lil_cell4"></div>
                    <div id="lil_cell_24"></div>
                `;
            }
            if(cls.contains("1") || cls.contains("2")) {
                cls.add("wrap2");
                array2[i].innerHTML = `
                    <div id="big_cell2"></div>
                    <div id="lil_cell2"></div>
                    <div id="lil_cell_22"></div>
                `;
            }
            if(cls.contains("3") || cls.contains("4")) {
                cls.add("wrap3");
                array2[i].innerHTML = `
                    <div id="big_cell3"></div>
                    <div id="lil_cell3"></div>
                    <div id="lil_cell_23"></div>
                `;
            }
            if(cls.contains("5") || cls.contains("6")) {
                cls.add("wrap");
                array2[i].innerHTML = `
                    <div id="big_cell"></div>
                    <div id="lil_cell"></div>
                    <div id="lil_cell_2"></div>
                `;
            }
        }
    };

    buildGridHorizontal() {
        const grid_container = document.querySelector(".activeGrid");
        let array1 = [];
        let array2 = []; 

        grid_container.classList.add("addition");

        for(let i = 0; i < this.state.keys.length; i++) {
            let line = document.createElement("section");
            line.classList.add("line");
            line.classList.add(`${i}`);
            array1.push(line);
        }

        for(let a = 0; a < array1.length; a++) {
            let res_mon = Object.values(this.state.map[a]);
            let kid = document.createElement("div");
            kid.style = `z-index: ${a}`;
            kid.classList.add("del_wrap2");
            res_mon.forEach(elem => {
                for(let j = 0; j < elem.length; j 
                    += 2) {
                    let elem1 = elem[j];
                    let elem2 = elem[j + 1];
                    if(j === elem.length - 1) {
                        elem1 = elem[j];
                        elem2 = 0;
                    }
                    let cell = document.createElement("div");
                    cell.classList.add(`${elem1 + elem2}`);
                    cell.classList.add("cell");
                    kid.appendChild(cell);
                }
                array1[a].appendChild(kid);
            })
            grid_container.appendChild(array1[a]);
        }

        const line_kids = grid_container.children;

        for(let kid of line_kids){
            for(let cell of kid.children) {
                for(let item of cell.children) {
                    array2.push(item);
                }
            }
        }

        for(let i = 0; i < array2.length; i++) {
            let cls = array2[i].classList;

            if(cls.contains("0")) {
                cls.add("wrap4");
                array2[i].innerHTML = `
                    <div id="big_cell4"></div>
                    <div id="lil_cell4"></div>
                    <div id="lil_cell_24"></div>
                `;
            }
            if(cls.contains("1") || cls.contains("2")) {
                cls.add("wrap2");
                array2[i].innerHTML = `
                    <div id="big_cell2"></div>
                    <div id="lil_cell2"></div>
                    <div id="lil_cell_22"></div>
                `;
            }
            if(cls.contains("3") || cls.contains("4")) {
                cls.add("wrap3");
                array2[i].innerHTML = `
                    <div id="big_cell3"></div>
                    <div id="lil_cell3"></div>
                    <div id="lil_cell_23"></div>
                `;
            }
            if(cls.contains("5") || cls.contains("6")) {
                cls.add("wrap");
                array2[i].innerHTML = `
                    <div id="big_cell"></div>
                    <div id="lil_cell"></div>
                    <div id="lil_cell_2"></div>
                `;
            }

        }
    };

    render() {
        return(
            <article id="grid" className="theme_light" onClick={this.toggleTheme}>
                <div className="activeGrid activity_light"></div>
            </article>
        )
    } 
};