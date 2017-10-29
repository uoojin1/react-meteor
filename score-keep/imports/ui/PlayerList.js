import React from 'react';
import {Players} from '../api/players'; // importing mongoDB creates miniMongo in the client side
import PropTypes from 'prop-types';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {

    renderPlayers() { //use array.map to map array of objects to array of jsx
        if(this.props.players.length === 0){
            return (
                <div className="item">
                    <p className="item__message item__message--empty">Add your first player to get started!</p>
                </div>
            )
        }else{
            return this.props.players.map((player) => <Player key={player._id} player={player}/>);            
        }
    };
    
    render() {
        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderPlayers()}
                </FlipMove>    
            </div>
        )
    }
}

PlayerList.PropTypes = {
    players: PropTypes.array.isRequired
}