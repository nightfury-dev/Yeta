import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Slider
} from 'react-native';

import NumberPicker from './NumberPicker';
import styles from '../styles/styles';


const style = {
    flex: 8,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#DF878B',
    alignItems: 'center'
};

const nameStyle = {
    flex: 2
};

class ScoregridEditElement extends React.Component {
    scoreChanged(score) {
        this.setState({score});
    }

    done(score) {
        this.props.updateScore(this.props.gameId, this.props.player.id, this.props.hole, score);
        if (this.props.afterEdit) {
            this.props.afterEdit();
        }
    }

    render() {
        const baseText = StyleSheet.flatten([styles.baseText, styles.nameText]);
        const score = this.state ? this.state.score : this.props.score;
        return (
            <View style={style}>
                <View style={nameStyle}>
                    <Text style={baseText} numberOfLines={1}>
                        {this.props.player.name}
                    </Text>
                </View>
                <Slider
                    style={{flex: 6}}
                    minimumValue={1}
                    maximumValue={10}
                    step={1}
                    value={this.props.score}
                    onValueChange={this.scoreChanged.bind(this)}
                    onSlidingComplete={this.done.bind(this)}/>
                <View style={{flex: 1}}>
                    <Text style={baseText} numberOfLines={1}>{score}</Text>
                </View>
            </View>
        );
    }
};

export default ScoregridEditElement;
