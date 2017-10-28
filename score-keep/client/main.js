import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from '../imports/api/players'; // importing mongoDB creates miniMongo in the client side


const renderPlayers = (playersList) => { //use array.map to map array of objects to array of jsx
    return playersList.map((player) => {
        return (
            <p key={player._id}>
                {player.name} has {player.score} point(s).
                <button onClick={() => Players.update({_id: player._id}, {$inc: {score: 1}})}>+1</button>
                <button onClick={() => Players.update({_id: player._id}, {$inc: {score: -1}})}>-1</button>
                <button onClick={() => Players.remove({_id: player._id})}>X</button>
            </p>
        );
    });
};

const handleSubmit = (e) => { 
    e.preventDefault();// using this will prevent full page refresh
    let playerName = e.target.playerName.value; // e.target.<name attribute>.value can target the form
    if (playerName) {
        Players.insert({ // this inserts to minimongo, which then uses ddp to update MongoDB
            name: playerName,
            score: 3
        });
    }
}

Meteor.startup(() => {
    let players;
    Tracker.autorun(() => { // this Tracker.autorun checks for anychange in players and then updates the dom right away
        players = Players.find().fetch();
        let title = 'account settings';
        let name = 'Eugene';
        let jsx = (
            <div>
                <h1>{title}</h1>
                <p>Hello {name}!</p>
                <p>This is my second p.</p>
                {renderPlayers(players)}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player name"/>
                    <button>Add Player</button>
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });

    
});