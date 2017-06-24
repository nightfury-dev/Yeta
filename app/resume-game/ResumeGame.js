import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Confirmation from '../shared/components/Confirmation';
import Screen from '../shared/components/Screen';
import GameListElement from './GameListElement';
import GamesActions from '../redux/GamesRedux';

class ResumeGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteConfirmation: false
    };
    this.renderRow = this.renderRow.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
  }

  handleSelection(rowData) {
    const index = _.findIndex(this.props.games, (g) => g.id === rowData.id);
    const game = this.props.games[index];
    this.props.changeCurrentGame(game);
    Actions.game();
  }

  confirmDelete(game) {
    this.setState({
      showDeleteConfirmation: true,
      selectedGame: game
    });
  }

  deleteGame() {
    this.props.removeGame(this.state.selectedGame);
    this.setState({
      showDeleteConfirmation: false,
      selectedGame: null
    });
  }

  renderRow(rowData) {
    return (
      <GameListElement
        game={rowData}
        onPress={() => this.handleSelection(rowData)}
        onDelete={() => this.confirmDelete(rowData)}
      />
    );
  }

  render() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }).cloneWithRows(_.sortBy(this.props.games, 'timeBegin').reverse());
    const removeGameString = this.state.selectedGame
            ? 'Do you really want to remove game?'
            : '';
    return (
      <Screen>
        <Confirmation
          onConfirm={this.deleteGame}
          onCancel={() => this.setState({ showDeleteConfirmation: false })}
          message={removeGameString}
          visible={this.state.showDeleteConfirmation}
        />
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow}
          enableEmptySections
        />
      </Screen>
    );
  }
}

ResumeGame.propTypes = {
  games: React.PropTypes.array.isRequired,
  changeCurrentGame: React.PropTypes.func.isRequired,
  removeGame: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  games: state.games.list
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentGame: (game) => dispatch(GamesActions.changeCurrentGame(game)),
  removeGame: (game) => dispatch(GamesActions.removeGame(game))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResumeGame);
