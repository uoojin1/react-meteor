import {Mongo} from 'meteor/mongo'; // Mongo Object 

export const Players = new Mongo.Collection('players'); // creates a collection of players
// this is like a table of Players