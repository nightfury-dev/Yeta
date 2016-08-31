import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

import PlusButton from './PlusButton';
import MinusButton from './MinusButton';
import styles from '../styles/styles';


const style = {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
};

class NumberPicker extends React.Component {
    render() {
        const additionalText = this.props.additionalText ?
            this.props.additionalText : '';
        const increaseButton = <PlusButton onPress={this.props.numberIncreased.bind(this)} />;
        const decreaseButton = <MinusButton onPress={this.props.numberDecreased.bind(this)} />;
        return (
            <View style={style}>
            {decreaseButton}
                <View style={{flex: 2}}>
                    <Text style={styles.baseText}>
                        {additionalText} {this.props.number}
                    </Text>
                </View>
                {increaseButton}
            </View>
        );
    }
};

export default NumberPicker;
