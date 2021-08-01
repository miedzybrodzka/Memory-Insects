import React, {Component} from 'react';
import {ActionButton} from './ActionButton';

export class Footer extends Component {

    constructor(props){
        super(props);
        this.state = {
            visibleLinks: false
        }
    }

    showOrHide = () => {
        this.setState({visibleLinks: !this.state.visibleLinks});
    }

    render() {
        return (
            <footer>
                {this.state.visibleLinks && <div className = 'visible-links'>
                    <div className = 'links-box'>
                        <p>GRAFIKI NA STRONIE POCHODZĄ Z :</p>
                        <a href="https://www.vecteezy.com/free-vector/cartoon">Cartoon Vectors by Vecteezy</a>
                    </div>
                    <ActionButton action = {this.showOrHide} className = 'links-button' content = 'POWRÓT'/>
                </div>}
                {!this.state.visibleLinks && <ActionButton action = {this.showOrHide} className = 'links-button' content = 'LINKI'/>}
            </footer>
        )
    }
}