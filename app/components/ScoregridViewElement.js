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

class ScoregridViewElement extends React.Component {
    render() {
        const baseText = StyleSheet.flatten([styles.baseText, styles.nameText]);
        return (
            <TouchableWithoutFeedback onLongPress={this.props.longPress.bind(this)}>
                <View style={style}>
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
