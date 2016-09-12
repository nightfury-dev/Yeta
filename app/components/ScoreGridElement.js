import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import styles from './styles/ScoregridElementStyles';


class ScoregridElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pressed: false };

        this.props.onPress = this.props.onPress.bind(this);
    }

    render() {
        const baseText = StyleSheet.flatten([styles.baseText, styles.nameText]);
        const gridStyle = this.props.highlighted ?
            styles.activeRow : styles.inactiveRow;
        return (<TouchableHighlight onPress={this.props.onPress}>
          <View style={gridStyle}>
            <View style={styles.nameStyle}>
              <Text style={baseText}>
                {this.props.player.name}
              </Text>
            </View>
            <Text style={baseText}>{this.props.score}</Text>
          </View>
        </TouchableHighlight>);
    }
}

ScoregridElement.propTypes = {
    onPress: React.PropTypes.func.isRequired,
    player: React.PropTypes.object.isRequired,
    score: React.PropTypes.number.isRequired,
    highlighted: React.PropTypes.bool.isRequired
};

export default ScoregridElement;
