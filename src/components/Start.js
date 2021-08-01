import React, {Component} from 'react';
import blueButterfly from '../images/blue-butterfly.png';
import {ActionButton} from './ActionButton';
import {connect} from 'react-redux';
import {setRandomArray} from '../store';

const mapStateToProps = (storeData) => ({
    cards: storeData.cards, 
})

const mapDispatchToProps = {
    setRandomArray: setRandomArray
}

const connectFunction = connect(mapStateToProps, mapDispatchToProps);


export const Start = connectFunction ( 
    class extends Component {

        startGame = () => {
            const helpArray = [];
            while(helpArray.length < 24) {
                const randomNumber = Math.floor(Math.random() * 24);
                if (!helpArray.includes(randomNumber)) {
                    helpArray.push(randomNumber);
                    this.props.setRandomArray(this.props.cards[randomNumber]);
                          
                }
            } 
            helpArray.length = 0;
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
)