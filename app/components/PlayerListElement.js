import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import Button from './Button';
import styles from '../styles/styles';


class PlayerListElement extends React.Component {
    render() {
        return (
            <View style={styles.flexRow}>
                <Text style={styles.baseText}>{this.props.player.name}</Text>
                <Button
                    text={'Delete'}
                    onPress={this.props.onDelete.bind(this, this.props.player)} />
            </View>
        );
    }
};

export default PlayerListElement;
