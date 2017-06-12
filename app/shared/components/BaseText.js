import React from 'react';
import styled from 'styled-components/native';

import { ColorPalette, Fonts } from '../../themes';

const BaseText = styled.Text`
  text-align: center;
  font-size: ${Fonts.size.normal};
  color: ${ColorPalette.text};
  font-family: ${Fonts.defaultFontFamily}
`;

export default BaseText;
