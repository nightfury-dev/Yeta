import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, ListView } from 'react-native';

import { updateScore } from '../actions/actionCreators';
import ScoregridElement from './ScoregridElement';


class ScoreGrid extends React.Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.getPlayingOrders = this.getPlayingOrders.bind(this);
  }

  getScore(player) {
    const scoreList = _.values(this.props.game.scores);
    return _.find(scoreList, (score) =>
            score.player.id === player.id &&
            score.hole.holenumber === this.props.game.currentHole
        );
  }

  getPlayingOrders() {
    const nextOrdering = (holeOrder, holeScores) => {
      const grouped = _.groupBy(holeScores, 'score');
      if (Object.keys(grouped).length === 1) {
        return holeOrder;
      }

      let currentOrder = 1;
      const order = {};

            // Loop through each distinct score group and set the correct
            // ordering. Keep the order correct among players in the same
            // score group
      _.values(grouped).forEach((group) => {
        const sortedOrdering = _.chain(group)
                    .map((s) => ({
                      playerId: s.player.id,
                      order: holeOrder[s.player.id]
                    }))
                    .sortBy('order')
                    .value();
        sortedOrdering.forEach((obj) => {
          order[obj.playerId] = currentOrder++;
        });
      });

      return order;
    };

        // First hole order is always default
    const firstHoleScores = {};
    _.values(this.props.game.players).forEach((player, index) => {
      firstHoleScores[player.id] = index + 1;
    });

    const ordering = { 1: firstHoleScores };
    const holeCount = _.values(this.props.game.course.holes).length;
    _.range(2, holeCount + 1).forEach((holeNumber) => {
      const previousOrdering = ordering[holeNumber - 1];
      const previousScores = _.values(this.props.game.scores).filter(
                (score) => score.hole.holenumber === (holeNumber - 1)
            );
      const next = nextOrdering(previousOrdering, previousScores);
      ordering[holeNumber] = next;
    });

    return ordering;
  }

  renderRow(player, sectionId, rowId) {
    const score = this.getScore(player);

    const order = this.ordering[this.props.game.currentHole][player.id];
    return (<ScoregridElement
      order={order}
      player={player}
      key={rowId}
      score={score.score}
      onScoreDecreased={() => this.props.updateScore(this.props.game.id, score, score.score - 1)}
      onScoreIncreased={() => this.props.updateScore(this.props.game.id, score, score.score + 1)}
    />);
  }

  render() {
    this.ordering = this.getPlayingOrders();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return (<ScrollView>
      <ListView
        dataSource={ds.cloneWithRows(this.props.game.players)}
        renderRow={this.renderRow}
      />
    </ScrollView>);
  }
}

ScoreGrid.propTypes = {
  scores: React.PropTypes.object.isRequired,
  players: React.PropTypes.object.isRequired,
  hole: React.PropTypes.number.isRequired,
  updateScore: React.PropTypes.func.isRequired,
  gameId: React.PropTypes.number.isRequired,
  game: React.PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateScore: bindActionCreators(updateScore, dispatch)
});

export default connect(null, mapDispatchToProps)(ScoreGrid);
