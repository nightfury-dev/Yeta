import React from 'react';
import {
  Text,
  TouchableHighlight,
  Navigator
} from 'react-native';

import styles from '../styles/styles';


class MenuItem extends React.Component {
    navigate(name) {
        this.props.navigator.push({name});
    }

    render() {
        return (
            <TouchableHighlight style={styles.menuItem}
                onPress={this.navigate.bind(this, this.props.name)}>
                <Text style={styles.menuItemText}>{this.props.label}</Text>
            </TouchableHighlight>
        );
    }
};


export default MenuItem;
