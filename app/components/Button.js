import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from '../styles/styles';


function Button(props) {
    const style = props.text.length === 1 ?
        styles.buttonSingle : styles.button;
    return (<TouchableHighlight style={style} onPress={props.onPress}>
      <Text style={styles.baseText}>{props.text}</Text>
    </TouchableHighlight>);
}

Button.propTypes = {
    onPress: React.PropTypes.func,
    text: React.PropTypes.string
};

export default Button;
