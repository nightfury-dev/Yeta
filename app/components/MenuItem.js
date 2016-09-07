import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from '../styles/styles';


class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.navigate = this.navigate.bind(this);
    }

    navigate(name) {
        this.props.navigator.push({ name });
    }

    render() {
        return (
          <TouchableHighlight
            style={styles.menuItem}
            onPress={() => this.navigate(this.props.name)}
          >
            <Text style={styles.menuItemText}>{this.props.label}</Text>
          </TouchableHighlight>
        );
    }
}

MenuItem.propTypes = {
    navigator: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
};

export default MenuItem;
