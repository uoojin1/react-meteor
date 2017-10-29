import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from '../imports/api/players'; // importing mongoDB creates miniMongo in the client side
import TitleBar from '../imports/ui/TitleBar';
import AddPlayer from '../imports/ui/AddPlayer';
import Player from '../imports/ui/Player';
import PlayerList from '../imports/ui/PlayerList';

Meteor.startup(() => {
    let players;
    Tracker.autorun(() => { // this Tracker.autorun checks for anychange in players and then updates the dom right away
        players = Players.find().fetch();
        let title = 'Dynamic Scorekeeper';
        let subTitle = 'let\'s keep some score!';
        let jsx = (
            <div>
                <TitleBar title={title} subTitle={subTitle}/>
                <PlayerList players={players}/>
                <AddPlayer/>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});