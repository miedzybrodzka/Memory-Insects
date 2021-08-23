import React, {Component} from 'react';
import blueButterfly from '../images/blue-butterfly.png';
import {ActionButton} from './ActionButton';
import {drawFunction} from './drawFunction';


export class Start  extends Component {

        startGame = () => {
            drawFunction(this.props.setRandomArray, this.props.cards);
            this.props.showGameboard();
        }
        

        render() {
            return (
                <div className = {this.props.className}>
                    <div className = 'title'>
                        <p className = 'memory'>MEMORY</p>
                        <p className = 'insects'>INSECTS</p>
                        <div className = 'butterfly'><img  src = {blueButterfly} alt = '' /></div>
                        <ActionButton className = 'start-button ' action = {this.startGame} content = 'ZACZNIJ GRĘ'/>
                    </div>
                </div>
            )
        }
    }
