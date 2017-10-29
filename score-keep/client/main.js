import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from '../imports/api/players'; // importing mongoDB creates miniMongo in the client side
import TitleBar from '../imports/ui/TitleBar';
import AddPlayer from '../imports/ui/AddPlayer';

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

Meteor.startup(() => {
    let players;
    Tracker.autorun(() => { // this Tracker.autorun checks for anychange in players and then updates the dom right away
        players = Players.find().fetch();
        let title = 'Dynamic Scorekeeper';
        let subTitle = 'let\'s keep some score!';
        let jsx = (
            <div>
                <TitleBar title={title} subTitle={subTitle}/>
                {renderPlayers(players)}
                <AddPlayer/>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});