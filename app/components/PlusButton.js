import React from 'react';
import { TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


function PlusButton(props) {
    return (<TouchableHighlight onPress={props.onPress}>
      <Icon
        name="plus"
        size={40}
        color="#98D2EB"
      />
    </TouchableHighlight>);
}

PlusButton.propTypes = {
    onPress: React.PropTypes.func.isRequired
};

export default PlusButton;
