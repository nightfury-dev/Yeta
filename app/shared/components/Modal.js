import React from 'react';
import { Modal as RNModal } from 'react-native';
import styled from 'styled-components/native';

import { Colors } from '../../themes';


const Wrapper = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
`;

const Container = styled.View`
  border-style: solid;
  border-radius: 10;
  border-width: 1;
  background-color: ${Colors.modalBackground};
  padding: 20;
  overflow: hidden;
  margin: 25;
`;

const Modal = (props) => (
  <RNModal animationType="slide" transparent visible={props.visible}>
    <Wrapper>
      <Container>
        {props.children}
      </Container>
    </Wrapper>
  </RNModal>
);

Modal.propTypes = {
  children: React.PropTypes.array,
  visible: React.PropTypes.bool.isRequired
};


export default Modal;
