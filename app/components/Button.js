import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from '../styles/styles';


class Button extends React.Component {
    render() {
        const style = this.props.text.length === 1 ?
            styles.buttonSingle : styles.button;
        return (
            <TouchableHighlight style={style} onPress={this.props.onPress}>
                <Text style={styles.baseText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
};

export default Button;
