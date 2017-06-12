import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'native-base';
import styled from 'styled-components/native';

import { ColorPalette } from '../../themes';
import BaseText from './BaseText';
import styles from './styles/ModalButtonStyles';

const MyText = styled(BaseText)`
  color: ${ColorPalette.primary.text}
`;

const ModalButton = (props) => (
  <Button
    block
    style={StyleSheet.flatten(styles.modalButton)}
    onPress={props.onPress}
  >
    <MyText>{props.text}</MyText>
  </Button>
);

ModalButton.propTypes = {
  text: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired
};

export default ModalButton;
