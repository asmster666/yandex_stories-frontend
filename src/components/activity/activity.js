import React, {Component} from 'react';
import './activity.sass';

export default class Activity extends Component {

    buildGridVertical() {
        const grid_container = document.getElementById("grid");
        let array1 = [];
        let array2 = []; 

        for(let i = 0; i < 7; i++) {
            let column = document.createElement("section");
            column.classList.add("column");
            array1.push(column);
        }


        array1.forEach(column => {
            for(let j = 0; j < 24; j++) {
                let cell = document.createElement("div");
                cell.classList.add("cell");
                column.appendChild(cell);
            }
            grid_container.appendChild(column);
        })

        const columns_kids = grid_container.children;

        for(let kid of columns_kids){
            for(let cell of kid.children) {
                array2.push(cell);
            }
        }
    }

    buildGridHorizontal() {
        const grid_container = document.getElementById("grid");
        let array1 = [];
        let array2 = []; 

        grid_container.classList.add("addition");

        for(let i = 0; i < 7; i++) {
            let line = document.createElement("section");
            line.classList.add("line");
            array1.push(line);
        }

        array1.forEach(line => {
            for(let j = 0; j < 12; j++) {
                let cell = document.createElement("div");
                cell.classList.add("cell2");
                line.appendChild(cell);
            }
            grid_container.appendChild(line);
        })

        const line_kids = grid_container.children;

        for(let kid of line_kids){
            for(let cell of kid.children) {
                array2.push(cell);
            }
        }
    }

    render() {
        return(
            <section id="grid" onClick={this.buildGridHorizontal}></section>
        )
    } 
}