import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

// limiting the proptypes of the TitleBar component
TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

TitleBar.defaultProps = {
    title: 'Default title',
    subTitle: 'Default subtitle'
}