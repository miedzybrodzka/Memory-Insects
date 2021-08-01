import React, {Component} from 'react';
import './App.css';
import {Start} from './components/Start';
import {Gameboard} from './components/Gameboard';
import {Footer} from './components/Footer';
import {Provider} from 'react-redux';
import dataStore from './store';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideStartBoard: '',
      showGameboard: ''
    }
  }

showGameboard = () => {
        this.setState({hideStartBoard: 'hide', showGameboard: 'show'});
}

  render() {
    return (
      <Provider store = {dataStore}>
        <div className = 'game'>
          <div className = 'leaves'>
            <Start showGameboard = {this.showGameboard} className = {this.state.hideStartBoard}/>
            <Gameboard className = {this.state.showGameboard}/>
          </div>
          <Footer />
        </div>
      </Provider>
    )
  }
}

