import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles';


class GameHeader extends React.Component {
    showScorecard() {
        this.props.navigator.push({
            name: 'scorecard',
            game: this.props.game
        });
    }

    render() {
        const game = this.props.game;
        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.baseText}>
                    Hole: {game.currentHole}/{game.course.holes.length}
                </Text>
                <TouchableHighlight onPress={this.showScorecard.bind(this)}>
                    <Icon
                        name='table'
                        size={40}
                        color='#98D2EB'/>
                </TouchableHighlight>
            </View>
        );
    }
};

export default GameHeader;
