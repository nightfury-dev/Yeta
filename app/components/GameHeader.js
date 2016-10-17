import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/GameHeaderStyles';


class GameHeader extends React.Component {
    constructor(props) {
        super(props);
        this.showScorecard = this.showScorecard.bind(this);
    }

    showScorecard() {
        this.props.navigator.push({ name: 'scorecard' });
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
              color="#98D2EB"
            />
          </TouchableHighlight>
        </View>);
    }
}

GameHeader.propTypes = {
    navigator: React.PropTypes.object.isRequired,
    game: React.PropTypes.object.isRequired
};

export default GameHeader;
