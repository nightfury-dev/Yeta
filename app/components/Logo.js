import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles/LogoStyles';


function Logo() {
  return (<View style={styles.container}>
    <Text style={styles.text}>Yet Another Discgolf App</Text>
  </View>);
}

export default Logo;
