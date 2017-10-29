import React from 'react';
import {Players} from '../api/players';

export default class AddPlayer extends React.Component {
    handleSubmit(e) {
        e.preventDefault();// using this will prevent full page refresh
        let playerName = e.target.playerName.value; // e.target.<name attribute>.value can target the form
        if (playerName) {
            Players.insert({ // this inserts to minimongo, which then uses ddp to update MongoDB
                name: playerName,
                score: 0
            });
        }
    }
    render() {  // render gets bound to the AddPlayer object. thus pass in this.
        // bind the handleSubmit to the AddPlayer object so that this.handleSubmit bind's its this to AddPlayer
        return (
            <div className="item">
                <form className="form" onSubmit={this.handleSubmit.bind(this)}> 
                    <input className="form__input" type="text" name="playerName" placeholder="Player name"/>
                    <button className="button">Add Player</button>
                </form>
            </div>
        );
    }
}