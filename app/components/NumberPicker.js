import React from 'react';
import { Text, View } from 'react-native';

import PlusButton from './PlusButton';
import MinusButton from './MinusButton';
import styles from '../styles/styles';


const style = {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
};

function NumberPicker(props) {
    const additionalText = props.additionalText ? props.additionalText : '';
    return (<View style={style}>
      <MinusButton onPress={() => props.numberDecreased()} />
      <View style={{ flex: 2 }}>
        <Text style={styles.baseText}>
          {additionalText} {props.number}
        </Text>
      </View>
      <PlusButton onPress={() => props.numberIncreased()} />
    </View>);
}

NumberPicker.propTypes = {
    additionalText: React.PropTypes.string,
    numberIncreased: React.PropTypes.func.isRequired,
    numberDecreased: React.PropTypes.func.isRequired,
    number: React.PropTypes.number.isRequired
};

export default NumberPicker;
