import React from 'react';
import { TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

function MinusButton(props) {
    return (
      <TouchableHighlight onPress={props.onPress}>
        <Icon
          name="minus"
          size={40}
          color="#98D2EB"
        />
      </TouchableHighlight>
    );
}

MinusButton.propTypes = {
    onPress: React.PropTypes.func.isRequired
};

export default MinusButton;
