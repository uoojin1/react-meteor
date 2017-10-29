import {Mongo} from 'meteor/mongo'; // Mongo Object 
import numeral from 'numeral';

export const Players = new Mongo.Collection('players'); // creates a collection of players
// this is like a table of Players

export const calculatePlayerPositions = (players) => {
    let rank = 1;

    return players.map((player, index) => {
        if(index !== 0 && players[index-1].score > player.score){
            rank++;
        }
        return {
            ...player,
            rank,
            position: numeral(rank).format('0o')
        }
    });
};