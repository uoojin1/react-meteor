import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
    renderSubtitle() {
        if(this.props.subTitle) {
            return <h2>{this.props.subTitle}</h2>
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.renderSubtitle()}
            </div>
        );
    }
}

// limiting the proptypes of the TitleBar component
TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

TitleBar.defaultProps = {
    title: 'Default title',
    // subTitle: 'Default subtitle'
}