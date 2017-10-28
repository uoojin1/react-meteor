import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
    _id: '1',
    name: 'Angela',
    score: 99
}, {
    _id: '2',
    name: 'ChangJu',
    score: -177
}, {
    _id: '3',
    name: 'Eugene',
    score: -12
}];

const renderPlayers = function(playersList) {
    //array map to map array of objects to array of jsx

    return playersList.map(function(player) {
        return <p key={player._id}>{player.name} has {player.score}</p>;
    });

};

Meteor.startup(function() {
    let title = 'account settings';
    let name = 'Eugene';
    let jsx = (
        <div>
            <h1>{title}</h1>
            <p>Hello {name}!</p>
            <p>This is my second p.</p>
            {renderPlayers(players)}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});