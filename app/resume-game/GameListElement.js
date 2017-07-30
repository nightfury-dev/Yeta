import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import BaseText from '../shared/components/BaseText';
import SwipableListItem from '../shared/components/SwipableListItem';
import styles from './styles/GameListElementStyles';
import { Fonts } from '../themes';
import { calculateScores } from '../helpers/score';
import { calculatePar } from '../helpers/course';
import { formatDate } from '../helpers/date';


const TinyText = styled(BaseText)`
  font-size: ${Fonts.size.tiny};
  text-align: left;
`;

const BigText = styled(BaseText)`
  text-align: left;
`;

const NameText = styled(TinyText)`
  text-align: right;
`;

const RightWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const RightContainer = styled.View`
  margin-left: 20;
  align-self: flex-start;
`;

const GameListElement = ({ game, onDelete, onPress }) => {
  const totalScores = calculateScores(game.scores, calculatePar(game.course));
  const formattedDate = formatDate(game.timeBegin);
  const players = game.players.map(
    (player) => {
      const score = totalScores[player.id];
      return <NameText key={player.id}>{player.name} ({score})</NameText>;
    }
  );

  const buttons = [{
    icon: 'trash',
    onPress: () => onDelete()
  }];

  return (
    <SwipableListItem
      style={StyleSheet.flatten(styles.row)}
      onPress={onPress}
      buttons={buttons}
    >
      <View>
        <BigText>{game.course.name}</BigText>
        <TinyText>{formattedDate}</TinyText>
      </View>
      <RightWrapper>
        <RightContainer>
          {players}
        </RightContainer>
      </RightWrapper>
    </SwipableListItem>
  );
};

GameListElement.propTypes = {
  game: React.PropTypes.object.isRequired,
  onDelete: React.PropTypes.func,
  onPress: React.PropTypes.func
};

export default GameListElement;
