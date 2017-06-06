import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

import ScorecardHeader from './ScorecardHeader';
import ScorecardRow from './ScorecardRow';
import ScorecardFooter from './ScorecardFooter';


class Scorecard extends React.Component {
  constructor(props) {
    super(props);

    this.renderHeader = this.renderHeader.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
  }

  componentWillMount() {
    this.players = _.values(this.props.game.players);
    this.scores = _.values(this.props.game.scores);
    this.holes = _.values(this.props.game.course.holes);

    this.holeScores = {};
    this.playerScores = {};

    this.scores.forEach((score) => {
      const holenumber = score.hole.holenumber;
      const playerId = score.player.id;

      if (!this.holeScores[holenumber]) {
        this.holeScores[holenumber] = {};
      }
      this.holeScores[holenumber][playerId] = score.score;

      if (!this.playerScores[playerId]) {
        this.playerScores[playerId] = 0;
      }
      this.playerScores[playerId] += score.score;
    });
  }

  createRowData() {
    return this.holes.map((hole) => {
      const currentHoleScores = this.players.map((player) =>
                this.holeScores[hole.holenumber][player.id]
            );
      return {
        holenumber: hole.holenumber,
        par: hole.par,
        scores: currentHoleScores
      };
    });
  }

  renderRow(rowData) {
    return (<ScorecardRow
      holenumber={rowData.holenumber}
      par={rowData.par}
      scores={rowData.scores}
    />);
  }

  renderFooter() {
    const totalScores = this.players.map((player) =>
          this.playerScores[player.id]
        );

    return (<ScorecardFooter
      course={this.props.game.course}
      scores={totalScores}
    />);
  }

  renderHeader() {
    return <ScorecardHeader players={this.players} />;
  }

  render() {
    const ds = new ListView.DataSource(
            { rowHasChanged: (r1, r2) => r1 !== r2 }
        );
    const dataSource = ds.cloneWithRows(this.createRowData());
    return (<ListView
      dataSource={dataSource}
      renderHeader={this.renderHeader}
      renderRow={this.renderRow}
      renderFooter={this.renderFooter}
      enableEmptySections
    />);
  }
}

Scorecard.propTypes = {
  game: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  game: state.games.current
});

export default connect(mapStateToProps)(Scorecard);

export {
  Scorecard
};

