import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const CenteredView = (props) => (
  <View>
    {props.children}
  </View>
);

CenteredView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};

export default CenteredView;
