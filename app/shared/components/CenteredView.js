import React from 'react';
import styled from 'styled-components/native';


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
  children: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array
  ])
};

export default CenteredView;
