import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import styles from '../styles/styles';


const styleNotPressed = {
    flex: 7,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#DF878B',
    alignItems: 'center'
};
const stylePressed = { ...styleNotPressed, backgroundColor: '#313131' };

const nameStyle = {
    flex: 6
};

class ScoregridViewElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pressed: false };

        this.props.longPress = this.props.longPress.bind(this);
    }

    render() {
        const baseText = StyleSheet.flatten([styles.baseText, styles.nameText]);
        const gridStyle = this.state.pressed ? stylePressed : styleNotPressed;
        return (<TouchableHighlight onLongPress={this.props.longPress}>
          <View style={gridStyle}>
            <View style={nameStyle}>
              <Text style={baseText}>
                {this.props.player.name}
              </Text>
            </View>
            <Text style={baseText}>{this.props.score}</Text>
          </View>
        </TouchableHighlight>);
    }
}

ScoregridViewElement.propTypes = {
    longPress: React.PropTypes.func.isRequired,
    player: React.PropTypes.object.isRequired,
    score: React.PropTypes.number.isRequired
};

export default ScoregridViewElement;
