import {Meteor} from 'meteor/meteor';
import {Players} from '../imports/api/players'; // players variable

Meteor.startup(function(){
    Players.insert({
        name: 'wowwow',
        score: 3
    });
    console.log(Players.find().fetch());

});