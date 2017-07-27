import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, ListView } from 'react-native';

import ScoreInput from './ScoreInput';
import { getPlayingOrders } from '../helpers/game';
import GamesActions from '../redux/GamesRedux';


class ScoreInputCollection extends React.Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  getScore(player) {
    const scoreList = _.values(this.props.game.scores);
    return _.find(scoreList, (score) =>
            score.player.id === player.id &&
            score.hole.holenumber === this.props.game.currentHole
        );
  }

  renderRow(player, sectionId, rowId) {
    const { updateScore, game } = this.props;
    const score = this.getScore(player);
    const order = this.ordering[this.props.game.currentHole][player.id];
    return (<ScoreInput
      order={order}
      player={player}
      key={rowId}
      score={score.score}
      onScoreDecreased={() => updateScore(game.id, score, score.score - 1)}
      onScoreIncreased={() => updateScore(game.id, score, score.score + 1)}
    />);
  }

  render() {
    this.ordering = getPlayingOrders(this.props.game);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return (<ScrollView>
      <ListView
        dataSource={ds.cloneWithRows(this.props.game.players)}
        renderRow={this.renderRow}
        enableEmptySections
      />
    </ScrollView>);
  }
}

ScoreInputCollection.propTypes = {
  updateScore: React.PropTypes.func.isRequired,
  game: React.PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateScore: (gameId, score, newScore) =>
    dispatch(GamesActions.updateScore(gameId, score, newScore))
});

export default connect(null, mapDispatchToProps)(ScoreInputCollection);
