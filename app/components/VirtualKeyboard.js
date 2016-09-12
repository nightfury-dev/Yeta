import React from 'react';
import { View } from 'react-native';
import { Button } from 'native-base';

import styles from './styles/VirtualKeyboardStyles';


function VirtualKeyboard(props) {
    return (<View style={styles.container}>
      <View style={styles.row}>
        <Button
          onPress={() => props.keyPressed(1)}
          style={styles.button}
        >
          1
        </Button>
        <Button
          onPress={() => props.keyPressed(2)}
          style={styles.button}
        >
          2
        </Button>
        <Button
          onPress={() => props.keyPressed(3)}
          style={styles.button}
        >
          3
        </Button>
      </View>
      <View style={styles.row}>
        <Button
          onPress={() => props.keyPressed(4)}
          style={styles.button}
        >
          4
        </Button>
        <Button
          onPress={() => props.keyPressed(5)}
          style={styles.button}
        >
          5
        </Button>
        <Button
          onPress={() => props.keyPressed(6)}
          style={styles.button}
        >
          6
        </Button>
      </View>
      <View style={styles.row}>
        <Button
          onPress={() => props.keyPressed(7)}
          style={styles.button}
        >
          7
        </Button>
        <Button
          onPress={() => props.keyPressed(8)}
          style={styles.button}
        >
          8
        </Button>
        <Button
          onPress={() => props.keyPressed(9)}
          style={styles.button}
        >
          9
        </Button>
      </View>
      <View style={styles.row}>
        <Button
          onPress={() => props.keyPressed('-')}
          style={styles.button}
        >
          -
        </Button>
        <Button
          onPress={() => props.keyPressed('next')}
          style={styles.button}
        >
          Next
        </Button>
        <Button
          onPress={() => props.keyPressed('+')}
          style={styles.button}
        >
          +
        </Button>
      </View>
    </View>);
}

VirtualKeyboard.propTypes = {
    keyPressed: React.PropTypes.func.isRequired
};

export default VirtualKeyboard;
