import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import NumberPicker from './NumberPicker';
import styles from '../styles/styles';


const style = {
    flex: 7,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#DF878B',
    alignItems: 'center'
};

const nameStyle = {
    flex: 6
};

class ScoreGridElement extends React.Component {
    render() {
        const baseText = StyleSheet.flatten([styles.baseText, styles.nameText]);
        return (
            <View style={style}>
                <View style={nameStyle}>
                    <Text style={baseText}>
                        {this.props.player.name}
                    </Text>
                </View>
                <NumberPicker
                    number={this.props.score}
                    numberIncreased={this.props.scoreIncreased.bind(this)}
                    numberDecreased={this.props.scoreDecreased.bind(this)}/>
            </View>
        );
    }
};

export default ScoreGridElement;
