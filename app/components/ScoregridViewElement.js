import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback
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

        this.pressIn = this.pressIn.bind(this);
        this.pressOut = this.pressOut.bind(this);
        this.props.longPress = this.props.longPress.bind(this);
    }

    pressIn() {
        this.setState({ pressed: true });
    }

    pressOut() {
        this.setState({ pressed: false });
    }

    render() {
        const baseText = StyleSheet.flatten([styles.baseText, styles.nameText]);
        const gridStyle = this.state.pressed ? stylePressed : styleNotPressed;
        return (<TouchableWithoutFeedback
          onPressIn={this.pressIn}
          onPressOut={this.pressOut}
          onLongPress={this.props.longPress}
        >
          <View style={gridStyle}>
            <View style={nameStyle}>
              <Text style={baseText}>
                {this.props.player.name}
              </Text>
            </View>
            <Text style={baseText}>{this.props.score}</Text>
          </View>
        </TouchableWithoutFeedback>);
    }
}

ScoregridViewElement.propTypes = {
    longPress: React.PropTypes.func.isRequired,
    player: React.PropTypes.object.isRequired,
    score: React.PropTypes.number.isRequired
};

export default ScoregridViewElement;
