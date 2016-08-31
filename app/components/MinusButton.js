import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles';


class MinusButton extends React.Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <Icon
                    name='minus'
                    size={40}
                    color='#98D2EB'/>
            </TouchableHighlight>
        );
    }
};

export default MinusButton;
