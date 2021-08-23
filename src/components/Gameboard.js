import React, {Component} from 'react';
import {ActionButton} from './ActionButton';
import {RANDOM, WIN, VISIBLE, UNCLICKABLE} from '../store/dataType';
import {drawFunction} from './drawFunction';


export class Gameboard  extends Component {

        constructor(props) {
            super(props);
            this.state = {
                firstCard: '',
                secondCard: '',
                comparedCardsIndexes: [],
                moves: 0,
                congratulations: false            
            }
        }

        showCard = (ev) => {
    
            this.props.showHiddenCard(ev);
            if(this.state.firstCard === '') {
                this.props.stopClick(ev);
                const tempObj1 = [...this.state.comparedCardsIndexes];
                tempObj1.push(ev.target.id);
                this.setState({firstCard: this.props.randomCardsArray[ev.target.id].insect, comparedCardsIndexes: tempObj1});  
            }else {
                this.props.unClickableArray.forEach(elem => this.props.blockAllCards(elem.id));
                const tempObj2 = [...this.state.comparedCardsIndexes];
                tempObj2.push(ev.target.id);
                this.setState({secondCard: this.props.randomCardsArray[ev.target.id].insect, comparedCardsIndexes: tempObj2, moves: this.state.moves + 1}, () => {
                    if(this.state.firstCard === this.state.secondCard){
                        this.props.setWinCards(this.state.comparedCardsIndexes);   
                    }
                    setTimeout(() => {
                        if(this.props.winCards.length === 24){
                            this.setState({congratulations: true});}
                        this.setState({firstCard: '', secondCard: '', comparedCardsIndexes: []});
                        this.props.isVisibleCard.forEach((elem, index) => {
                                if(!this.props.winCards.includes(`${index}`)){
                                    this.props.coverCards(elem.id);
                                }});
                        this.props.unClickableArray.forEach((elem, index) => {
                            if(!this.props.winCards.includes(`${index}`)){
                                this.props.unblockCards(elem.id);
                        }});
                    }, 1000);
                });
            }
        }


        startNewGame = () => {
            this.setState({firstCard: '', secondCard: '', comparedCardsIndexes: '', moves: 0, congratulations: false});
            this.props.clearTable(RANDOM);
            this.props.clearTable(WIN);
            this.props.isVisibleCard.forEach(elem => this.props.cleanTable(elem.id, VISIBLE, 'visible'));
            this.props.unClickableArray.forEach(elem => this.props.cleanTable(elem.id, UNCLICKABLE, 'disable'));
            
            setTimeout(()=>{ 
                drawFunction(this.props.setRandomArray, this.props.cards);
                },0) 
        }

        
        render () {
            return (
                <div className = {` hidden ${this.props.className}`}>
                    <p className = 'result'>{this.state.congratulations? `GRATULACJE UKOŃCZYŁEŚ GRĘ Z WYNIKIEM : ${this.state.moves}`: `WYNIK : ${this.state.moves}`}</p>
                    <div className = 'gameboard'>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[0].visible && <img src = {this.props.randomCardsArray[0].card } alt = ''/>} id = '0' disabled = {this.props.unClickableArray[0].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[1].visible && <img src = {this.props.randomCardsArray[1].card } alt = ''/>} id = '1' disabled = {this.props.unClickableArray[1].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[2].visible && <img src = {this.props.randomCardsArray[2].card } alt = ''/>} id = '2'  disabled = {this.props.unClickableArray[2].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[3].visible && <img src = {this.props.randomCardsArray[3].card } alt = ''/>} id = '3' disabled = {this.props.unClickableArray[3].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[4].visible && <img src = {this.props.randomCardsArray[4].card } alt = ''/>} id = '4' disabled = {this.props.unClickableArray[4].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[5].visible && <img src = {this.props.randomCardsArray[5].card } alt = ''/>} id = '5' disabled = {this.props.unClickableArray[5].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[6].visible && <img src = {this.props.randomCardsArray[6].card } alt = ''/>} id = '6' disabled = {this.props.unClickableArray[6].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[7].visible && <img src = {this.props.randomCardsArray[7].card } alt = ''/>} id = '7' disabled = {this.props.unClickableArray[7].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[8].visible && <img src = {this.props.randomCardsArray[8].card } alt = ''/>} id = '8' disabled = {this.props.unClickableArray[8].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[9].visible && <img src = {this.props.randomCardsArray[9].card } alt = ''/>} id = '9' disabled = {this.props.unClickableArray[9].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[10].visible && <img src = {this.props.randomCardsArray[10].card } alt = ''/>} id = '10' disabled = {this.props.unClickableArray[10].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[11].visible && <img src = {this.props.randomCardsArray[11].card } alt = ''/>} id = '11' disabled = {this.props.unClickableArray[11].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[12].visible && <img src = {this.props.randomCardsArray[12].card } alt = ''/>} id = '12' disabled = {this.props.unClickableArray[12].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[13].visible && <img src = {this.props.randomCardsArray[13].card } alt = ''/>} id = '13' disabled = {this.props.unClickableArray[13].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[14].visible && <img src = {this.props.randomCardsArray[14].card } alt = ''/>} id = '14' disabled = {this.props.unClickableArray[14].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[15].visible && <img src = {this.props.randomCardsArray[15].card } alt = ''/>} id = '15' disabled = {this.props.unClickableArray[15].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[16].visible && <img src = {this.props.randomCardsArray[16].card } alt = ''/>} id = '16' disabled = {this.props.unClickableArray[16].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[17].visible && <img src = {this.props.randomCardsArray[17].card } alt = ''/>} id = '17' disabled = {this.props.unClickableArray[17].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[18].visible && <img src = {this.props.randomCardsArray[18].card } alt = ''/>} id = '18' disabled = {this.props.unClickableArray[18].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[19].visible && <img src = {this.props.randomCardsArray[19].card } alt = ''/>} id = '19' disabled = {this.props.unClickableArray[19].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[20].visible && <img src = {this.props.randomCardsArray[20].card } alt = ''/>} id = '20' disabled = {this.props.unClickableArray[20].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[21].visible && <img src = {this.props.randomCardsArray[21].card } alt = ''/>} id = '21' disabled = {this.props.unClickableArray[21].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[22].visible && <img src = {this.props.randomCardsArray[22].card } alt = ''/>} id = '22' disabled = {this.props.unClickableArray[22].disable}/>
                        <ActionButton className = 'card'  action = {this.showCard} content = {this.props.isVisibleCard[23].visible && <img src = {this.props.randomCardsArray[23].card } alt = ''/>} id = '23' disabled = {this.props.unClickableArray[23].disable}/>
                    </div>
                    <ActionButton className = 'start-button' content = 'NOWA GRA' action = {this.startNewGame}/>        
                </div>
            )
        }
    }
