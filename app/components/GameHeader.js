import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from '../themes';
import styles from './styles/GameHeaderStyles';


class GameHeader extends React.Component {
    constructor(props) {
        super(props);
        this.showScorecard = this.showScorecard.bind(this);
    }

    showScorecard() {
        Actions.scorecard();
    }

    render() {
        const game = this.props.game;
        return (<View
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <Text style={styles.baseText}>
            Hole: {game.currentHole}/{game.course.holes.length}
          </Text>
          <TouchableHighlight onPress={this.showScorecard}>
            <Icon
              name="table"
              size={40}
              color={Colors.orange}
            />
          </TouchableHighlight>
        </View>);
    }
}

GameHeader.propTypes = {
    game: React.PropTypes.object.isRequired
};

export default GameHeader;
