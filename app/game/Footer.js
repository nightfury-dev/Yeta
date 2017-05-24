import React from 'react';
import { Button, Footer as NativeBaseFooter, FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from '../themes';


const style = {
  flex: 1,
  backgroundColor: Colors.background
};

const Footer = (props) => (
  <NativeBaseFooter style={style}>
    <FooterTab>
      <Button onPress={props.onShowGame}>
        <Icon style={{ color: 'red' }} name="pencil" size={28} />
      </Button>
      <Button onPress={props.onShowScorecard}>
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
