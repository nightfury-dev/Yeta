import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import styles from './styles/ScoregridElementStyles';
import AnimatedText from './AnimatedText';

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
            <Text style={styles.orderText}>{this.props.order}</Text>
            <View style={styles.nameStyle}>
              <Text style={baseText}>
                {this.props.player.name}
              </Text>
            </View>
            <AnimatedText style={styles.baseText}>{this.props.score}</AnimatedText>
          </View>
        </TouchableHighlight>);
    }
}

ScoregridElement.propTypes = {
    onPress: React.PropTypes.func.isRequired,
    player: React.PropTypes.object.isRequired,
    score: React.PropTypes.number.isRequired,
    highlighted: React.PropTypes.bool.isRequired,
    order: React.PropTypes.number.isRequired
};

export default ScoregridElement;
