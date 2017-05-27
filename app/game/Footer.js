import React from 'react';
import { Button, Footer as NativeBaseFooter, FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from '../themes';


const style = {
  flex: 1,
  backgroundColor: Colors.background
};

const Footer = ({ onShowGame, onShowScorecard }) => (
  <NativeBaseFooter style={style}>
    <FooterTab>
      <Button onPress={onShowGame}>
        <Icon style={{ color: 'red' }} name="pencil" size={28} />
      </Button>
      <Button onPress={onShowScorecard}>
        <Icon style={{ color: 'green' }} name="trophy" size={28} />
      </Button>
    </FooterTab>
  </NativeBaseFooter>
);

Footer.propTypes = {
  onShowGame: React.PropTypes.func.isRequired,
  onShowScorecard: React.PropTypes.func.isRequired
};

export default Footer;
