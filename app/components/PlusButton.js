import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles';


class PlusButton extends React.Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <Icon
                    name='plus'
                    size={40}
                    color='#98D2EB'/>
            </TouchableHighlight>
        );
    }
};

export default PlusButton;
