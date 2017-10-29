import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from '../imports/api/players'; // importing mongoDB creates miniMongo in the client side

import Player from '../imports/ui/Player';
import App from '../imports/ui/App';

Meteor.startup(() => {
    let players;
    Tracker.autorun(() => { // this Tracker.autorun checks for anychange in players and then updates the dom right away
        players = Players.find().fetch();
        let title = 'Dynamic Scorekeeper';
        ReactDOM.render(<App title={title} players={players}/>, document.getElementById('app'));
    });
});