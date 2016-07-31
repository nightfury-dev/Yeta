import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

import AwesomeButton from 'react-native-awesome-button';


const style = {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
        const increaseButton = <AwesomeButton style={{flex: 1}} states={increaseButtonState}/>;
        const decreaseButton = <AwesomeButton style={{flex: 1}} states={decreaseButtonState}/>;
        return (
            <View style={style}>
                {increaseButton}
                <Text style={{flex: 2, textAlign: 'center'}}>{this.props.number}</Text>
                {decreaseButton}
            </View>
        );
    }
};

export default NumberPicker;
