import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { ListView, View, Share, ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { takeSnapshot } from 'react-native-view-shot';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Row from './Row';
import Screen from '../shared/components/Screen';
import CenteredView from '../shared/components/CenteredView';
import { ColorPalette, Fonts } from '../themes';
import { formatDate } from '../helpers/date';


const CellText = styled.Text`
  font-size: ${Fonts.size.small};
  color: ${ColorPalette.text};
  font-weight: 400;
`;

const UnderParCellText = styled(CellText)`
  color: blue;
  font-weight: 600;
`;

const OverParCellText = styled(CellText)`
  color: red;
  font-weight: 600;
`;

const ScreenshotTitleText = styled.Text`
  font-size: ${Fonts.size.normal};
  color: ${ColorPalette.text};
  font-weight: 600;
`;

const ScreenshotView = styled(View)`
  background-color: ${ColorPalette.background}
`;

const getScoreCellContent = (score, par) => {
  const diff = score - par;

  if (diff < 0) {
    return <UnderParCellText numberOfLines={1}>{score}</UnderParCellText>;
  } else if (diff > 0) {
    return <OverParCellText numberOfLines={1}>{score}</OverParCellText>;
  }

  return <CellText numberOfLines={1}>{score}</CellText>;
};

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.takeScreenshot && this.scorecard) {
      takeSnapshot(this.scorecard)
      .then((uri) => {
        Share.share({
          title: 'Yet Another Discgolf App - Scorecard',
          url: `${uri}`
        });
      });
    }
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
    const firstCell = (
      <CellText numberOfLines={1}>
        {`${rowData.holenumber} (${rowData.par})`}
      </CellText>
    );

    return (
      <Row
        collection={rowData.scores}
        getContent={(score) => getScoreCellContent(score, rowData.par)}
        firstCellContent={firstCell}
      />
    );
  }

  renderFooter() {
    const totalScores = this.players.map((player) =>
          this.playerScores[player.id]
        );

    return (
      <Footer
        course={this.props.game.course}
        scores={totalScores}
      />
    );
  }

  renderHeader() {
    return <Header players={this.players} />;
  }

  render() {
    const ds = new ListView.DataSource(
            { rowHasChanged: (r1, r2) => r1 !== r2 }
        );
    const dataSource = ds.cloneWithRows(this.createRowData());
    const list = (
      <ListView
        dataSource={dataSource}
        renderHeader={this.renderHeader}
        renderRow={this.renderRow}
        renderFooter={this.renderFooter}
        enableEmptySections
      />
    );

    const { width } = Dimensions.get('window');
    const { game } = this.props;

    // ScrollView wraps the scorecard ListView that is rendered outside the view
    // port full height so that the screenshot will be correct height.
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{
            height: 9999,
            width,
            flex: 1,
            position: 'absolute',
            left: width
          }}
        >
          <ScreenshotView
            ref={(component) => { this.scorecard = component; }}
          >
            <CenteredView>
              <ScreenshotTitleText>
                {game.course.name} - {formatDate(game.timeBegin)}
              </ScreenshotTitleText>
            </CenteredView>
            {list}
          </ScreenshotView>
        </ScrollView>
        <Screen>
          {list}
        </Screen>
      </View>
    );
  }
}

Scorecard.propTypes = {
  game: PropTypes.object.isRequired,
  takeScreenshot: PropTypes.bool
};

const mapStateToProps = (state) => ({
  game: state.games.current
});

export default connect(mapStateToProps)(Scorecard);

export {
  Scorecard
};

