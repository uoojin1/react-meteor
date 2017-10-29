import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players, calculatePlayerPositions} from '../imports/api/players'; // importing mongoDB creates miniMongo in the client side

import Player from '../imports/ui/Player';
import App from '../imports/ui/App';

Meteor.startup(() => {
    let players;
    Tracker.autorun(() => { // this Tracker.autorun checks for anychange in players and then updates the dom right away
        players = Players.find({},{sort: {score: -1}}).fetch();
        let positionedPlayers = calculatePlayerPositions(players);
        let title = 'Dynamic Scorekeeper';
        ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
    });
});