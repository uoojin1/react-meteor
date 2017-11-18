import React from 'react';
import Clipboard from 'clipboard';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';

export default class LinksListItem extends React.Component {
    // state with constructor
    constructor(props){
        super(props);
        this.state = {
            justCopied: false
        };
    }
    componentDidMount() { // runs when component first gets into screen
        this.clipboard = new Clipboard(this.refs.copy); // we can use this.refs to select elements with ref
        this.clipboard.on('success', () => {
            this.setState({justCopied: true});
            setTimeout(() => this.setState({justCopied: false}), 1000);
        }).on('error', () => {
            alert('unable to copy. please manually copy the link');
        });
    }
    componentWillUnmount() {
        this.clipboard.destroy();
    }
    renderStats(){
        const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits';
        let visitedMessage = null;
        if(typeof this.props.lastVisitedAt === 'number') {
            visitedMessage = `(visited ${ moment(this.props.lastVisitedAt).fromNow() })`
        }
        return <div>{this.props.visitedCount} {visitMessage} - {visitedMessage}</div>        
    }
    render() {
        return (
            <div>
                <p>{this.props.url}</p>
                <p>{this.props.shortUrl}</p>
                <p>{this.props.visible.toString()}</p>
                {this.renderStats()}
                <a href={this.props.shortUrl} target="_blank">
                    Visit
                </a>
                <button ref="copy" data-clipboard-text={this.props.shortUrl}>
                    {this.state.justCopied ? 'Copied' : 'Copy'}
                </button>
                <button onClick={() => {Meteor.call('links.setVisibility', this.props._id, !this.props.visible)}}>
                    {this.props.visible ? 'Hide' : 'Unhide'}
                </button>
            </div>
        );
    }
}

LinksListItem.prototypes = {
    _id: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    userId: React.PropTypes.string.isRequired,
    visible: React.PropTypes.bool.isRequired,
    shortUrl: React.PropTypes.string.isRequired,
    visitedCount: React.PropTypes.number.isRequired,
    lastVisitedAt: React.PropTypes.number // allowing null
}