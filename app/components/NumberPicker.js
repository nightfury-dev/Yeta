import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

import Button from './Button';
import styles from '../styles/styles';


const style = {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
};

class NumberPicker extends React.Component {
    render() {
        const increaseButtonState = {
            default: {
              text: '+',
              onPress: this.props.numberIncreased.bind(this),
              backgroundColor: '#1155DD'
            }
        };
        const decreaseButtonState = {
            default: {
              text: '-',
              onPress: this.props.numberDecreased.bind(this),
              backgroundColor: '#1155DD'
            }
        };
        const additionalText = this.props.additionalText ?
            this.props.additionalText : '';
        const increaseButton = <Button onPress={this.props.numberIncreased.bind(this)} text={'+'}/>;
        const decreaseButton = <Button onPress={this.props.numberDecreased.bind(this)} text={'-'}/>;
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
