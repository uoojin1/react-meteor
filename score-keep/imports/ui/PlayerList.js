import React from 'react';
import {Players} from '../api/players'; // importing mongoDB creates miniMongo in the client side
import PropTypes from 'prop-types';
import Player from './Player';


export default class PlayerList extends React.Component {

    renderPlayers() { //use array.map to map array of objects to array of jsx
        if(this.props.players.length === 0){
            return <p>Add your first player to get started</p>
        }else{
            return this.props.players.map((player) => <Player key={player._id} player={player}/>);            
        }
    };
    
    render() {
        return (
            <div>
                {this.renderPlayers()}
            </div>
        )
    }
}

PlayerList.PropTypes = {
    players: PropTypes.array.isRequired
}