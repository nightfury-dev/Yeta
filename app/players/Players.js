import React from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import Confirmation from '../shared/components/Confirmation';
import Screen from '../shared/components/Screen';
import AddActionButton from '../shared/components/AddActionButton';
import AddPlayerModal from '../shared/components/AddPlayerModal';
import ListRow from './ListRow';
import PlayersActions from '../redux/PlayersRedux';


class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteConfirmation: false,
      showAddPlayerDialog: false
    };

    this.addPlayer = this.addPlayer.bind(this);
    this.hideAddPlayerDialog = this.hideAddPlayerDialog.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
  }

  addPlayer(name) {
    this.props.addPlayer(name);
    this.hideAddPlayerDialog();
  }

  hideAddPlayerDialog() {
    this.setState({
      showAddPlayerDialog: false
    });
  }

  deletePlayer() {
    this.props.removePlayer(this.state.selectedPlayer.id);
    this.setState({
      showDeleteConfirmation: false,
      selectedPlayer: null
    });
  }

  confirmDelete(player) {
    this.setState({
      showDeleteConfirmation: true,
      selectedPlayer: player
    });
  }

  renderRow(rowData) {
    return (
      <ListRow
        text={rowData.name}
        onDelete={() => this.confirmDelete(rowData)}
      />
    );
  }

  render() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.name !== r2.name
    }).cloneWithRows(this.props.players);
    const removeName = this.state.selectedPlayer ?
            this.state.selectedPlayer.name : '';
    return (
      <Screen>
        <Confirmation
          onConfirm={this.deletePlayer}
          onCancel={() => this.setState({ showDeleteConfirmation: false })}
          message={`Remove player '${removeName}'?`}
          visible={this.state.showDeleteConfirmation}
        />
        <AddPlayerModal
          onSave={this.addPlayer}
          onCancel={this.hideAddPlayerDialog}
          visible={this.state.showAddPlayerDialog}
        />
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow}
          enableEmptySections
        />
        <AddActionButton
          onPress={() => this.setState({ showAddPlayerDialog: true })}
        />
      </Screen>
    );
  }
}

Players.propTypes = {
  addPlayer: React.PropTypes.func.isRequired,
  removePlayer: React.PropTypes.func.isRequired,
  players: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  players: state.players
});

const mapDispatchToProps = (dispatch) => ({
  addPlayer: (name) => dispatch(PlayersActions.addPlayer(name)),
  removePlayer: (id) => dispatch(PlayersActions.removePlayer(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
