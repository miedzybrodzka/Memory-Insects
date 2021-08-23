import {Component} from 'react';
export class draw extends Component{

    drawCards (){
    const helpArray = [];
    while(helpArray.length < 24) {
        const randomNumber = Math.floor(Math.random() * 24);
        if (!helpArray.includes(randomNumber)) {
            helpArray.push(randomNumber);
            this.props.setRandomArray(this.props.cards[randomNumber]);
                
        }
    } 
    helpArray.length = 0;
    }
}