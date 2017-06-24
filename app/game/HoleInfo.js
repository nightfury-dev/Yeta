import * as _ from 'lodash';
import React from 'react';
import Interactable from 'react-native-interactable';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import BaseText from '../shared/components/BaseText';
import NumberSwitcher from '../shared/components/NumberSwitcher';
import { Fonts, ColorPalette } from '../themes';
import CoursesActions from '../redux/CoursesRedux';


const DrawerContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Wrapper = styled.View`
  height: 200;
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

const HiddenContent = styled.View`
  flex: 6;
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

class HoleInfo extends React.Component {
  constructor(props) {
    super(props);
    this.increasePar = this.increasePar.bind(this);
    this.decreasePar = this.decreasePar.bind(this);
    this.getCurrentPar = this.getCurrentPar.bind(this);
    this.updatePar = this.updatePar.bind(this);
  }

  getCurrentPar() {
    const { game } = this.props;

    const par = _.find(
      game.course.holes,
      (h) => h.holenumber === game.currentHole
    ).par;

    return par;
  }

  increasePar() {
    this.updatePar(this.getCurrentPar() + 1);
  }

  decreasePar() {
    this.updatePar(this.getCurrentPar() - 1);
  }

  updatePar(newPar) {
    const { game } = this.props;
    const pars = _.values(game.course.holes).map((hole) => hole.par);
    const index = game.currentHole - 1;

    const newPars = [
      ...pars.slice(0, index),
      newPar,
      ...pars.slice(index + 1)
    ];

    this.props.updateCourse(game.course, game.course.name, newPars);
  }

  render() {
    const { game } = this.props;
    const par = this.getCurrentPar();
    return (
      <DrawerContainer pointerEvents="box-none">
        <Interactable.View
          verticalOnly
          snapPoints={[{ y: -70, id: 'closed' }, { y: 60, id: 'open' }]}
          initialPosition={{ y: -70 }}
        >
          <Wrapper>
            <HiddenContent>
              <Text>Change hole par</Text>
              <CenteredRow>
                <NumberSwitcher
                  number={par}
                  onIncrease={this.increasePar}
                  onDecrease={this.decreasePar}
                />
              </CenteredRow>
            </HiddenContent>
            <Row>
              <InfoText>Par { par }</InfoText>
              <InfoText>
                { game.currentHole }/{ game.course.holes.length }
              </InfoText>
            </Row>
            <CenteredRow>
              <Icon
                style={{ color: ColorPalette.primary.text }}
                name="minus" size={26}
              />
            </CenteredRow>
          </Wrapper>
        </Interactable.View>
      </DrawerContainer>
    );
  }
}

HoleInfo.propTypes = {
  game: React.PropTypes.object.isRequired,
  updateCourse: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  game: state.games.current
});

const mapDispatchToProps = (dispatch) => ({
  updateCourse: (course, name, pars) =>
    dispatch(CoursesActions.updateCourse(course, name, pars))
});

export default connect(mapStateToProps, mapDispatchToProps)(HoleInfo);
