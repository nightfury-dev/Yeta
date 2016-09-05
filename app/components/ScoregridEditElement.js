import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Picker
} from 'react-native';

import NumberPicker from './NumberPicker';
import styles from '../styles/styles';


class ScoregridEditElement extends React.Component {
    done(score) {
        this.props.updateScore(this.props.gameId, this.props.player.id, this.props.hole, score);
        if (this.props.afterEdit) {
            this.props.afterEdit();
        }
    }

    render() {
        const baseText = StyleSheet.flatten([styles.baseText, styles.nameText]);
        const score = this.state ? this.state.score : this.props.score;

        const pickerItems = _.range(1, 15).map(
            (score) => <Picker.Item label={score + ''} value={score} />
        );

        return <Picker
            itemStyle={styles.baseText}
            onValueChange={this.done.bind(this)}
            selectedValue={score}
            mode={'dialog'}>
                {pickerItems}
            </Picker>
    }
};

export default ScoregridEditElement;
