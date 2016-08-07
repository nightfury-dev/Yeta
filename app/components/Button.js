import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from '../styles/styles';


const buttonStyle = {
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#DCD7CA'
};

class Button extends React.Component {
    render() {
        const style = this.props.text.length === 1 ?
            Object.assign({width: 40}, buttonStyle) :
            buttonStyle;
        return (
            <TouchableHighlight style={style} onPress={this.props.onPress}>
                <Text style={styles.baseText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
};

export default Button;
