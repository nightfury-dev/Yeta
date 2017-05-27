import React from 'react';
import styled from 'styled-components/native';

import { Colors, Fonts } from '../../themes';

const BaseText = styled.Text`
  text-align: center;
  font-size: ${Fonts.size.normal};
  color: ${Colors.text};
  font-family: ${Fonts.defaultFontFamily}
`;

export default BaseText;
