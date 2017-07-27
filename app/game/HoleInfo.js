import React from 'react';
import Interactable from 'react-native-interactable';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput as TextInputRN } from 'react-native';

import BaseText from '../shared/components/BaseText';
import NumberSwitcher from '../shared/components/NumberSwitcher';
import { Fonts, ColorPalette } from '../themes';


const DrawerContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Wrapper = styled.View`
  height: 300;
  background-color: ${ColorPalette.primary.light};
  border-bottom-left-radius: 15;
  border-bottom-right-radius: 15;
  padding: 10;
  border: 1;
  border-color: ${ColorPalette.primary.dark}
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const CenteredRow = styled(Row)`
  justify-content: space-around;
  align-items: flex-start;
`;

const AlignBottom = styled(Row)`
  justify-content: space-between;
  align-self: flex-end;
`;

const HiddenContent = styled.View`
  flex: 4;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoText = styled(BaseText)`
  font-size: ${Fonts.size.huge};
  color: ${ColorPalette.primary.text}
`;

const Text = styled(BaseText)`
  text-align: left;
  color: ${ColorPalette.primary.text}
`;

const TextInput = styled(TextInputRN)`
  background-color: white;
  height: 120;
  padding: 5;
`;

const HoleInfo = (props) => {
  const {
    hole,
    onParIncreased,
    onParDecreased,
    onNoteUpdated,
    totalHoleCount
  } = props;

  return (
    <DrawerContainer pointerEvents="box-none">
      <Interactable.View
        verticalOnly
        snapPoints={[{ y: -180, id: 'closed' }, { y: 60, id: 'open' }]}
        initialPosition={{ y: -180 }}
      >
        <Wrapper>
          <HiddenContent>
            <Text>Change hole par</Text>
            <CenteredRow>
              <NumberSwitcher
                number={hole.par}
                onIncrease={onParIncreased}
                onDecrease={onParDecreased}
              />
            </CenteredRow>
            <TextInput
              multiline
              placeholder="Hole notes..."
              value={hole.note}
              onChangeText={onNoteUpdated}
            />
          </HiddenContent>
          <Row>
            <AlignBottom>
              <InfoText>Par { hole.par }</InfoText>
              <Icon
                style={{ color: ColorPalette.primary.text }}
                name="minus" size={26}
              />
              <InfoText>
                { hole.holenumber }/{ totalHoleCount }
              </InfoText>
            </AlignBottom>
          </Row>
        </Wrapper>
      </Interactable.View>
    </DrawerContainer>
  );
};

HoleInfo.propTypes = {
  hole: React.PropTypes.object.isRequired,
  onParIncreased: React.PropTypes.func.isRequired,
  onParDecreased: React.PropTypes.func.isRequired,
  onNoteUpdated: React.PropTypes.func.isRequired,
  totalHoleCount: React.PropTypes.number.isRequired
};

export default HoleInfo;
