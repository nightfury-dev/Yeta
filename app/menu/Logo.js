import React from 'react';
import styled from 'styled-components/native';

import { ColorPalette, Fonts } from '../themes';

const Container = styled.View`
  flex: 1;
  height: 175;
  justify-content: center;
`;

const LogoText = styled.Text`
  font-size: ${Fonts.size.huge};
  color: ${ColorPalette.text};
  align-self: center;
`;

function Logo() {
  return (
    <Container>
      <LogoText>Yet Another Discgolf App</LogoText>
    </Container>
  );
}

export default Logo;
