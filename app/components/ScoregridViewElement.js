import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

import NumberPicker from './NumberPicker';
import styles from '../styles/styles';


const style = {
    flex: 7,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#DF878B',
    alignItems: 'center'
};

const styleNotPressed = {...style};
const stylePressed = {...style, backgroundColor: '#313131'};

const nameStyle = {
    flex: 6
};

class ScoregridViewElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pressed: false};
    }

    pressIn() {
        this.setState({pressed: true});
    }

    pressOut() {
        this.setState({pressed: false});
    }

    render() {
        const baseText = StyleSheet.flatten([styles.baseText, styles.nameText]);
        const gridStyle = this.state.pressed ? stylePressed : styleNotPressed;
        return (
            <TouchableWithoutFeedback
                onPressIn={this.pressIn.bind(this)}
                onPressOut={this.pressOut.bind(this)}
                onLongPress={this.props.longPress.bind(this)}>
                <View style={gridStyle}>
                    <View style={nameStyle}>
                        <Text style={baseText}>
                            {this.props.player.name}
                        </Text>
                    </View>
                    <Text style={baseText}>{this.props.score}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

export default ScoregridViewElement;
