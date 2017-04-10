import React from 'react';
import { View, ListView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addPlayer, removePlayer } from '../actions/actionCreators';
import ContextMenu from '../shared/components/ContextMenu';
import Confirmation from '../shared/components/Confirmation';
import PlayerListElement from '../shared/components/PlayerListElement';
import styles from './styles/PlayersStyles';
import AddActionButton from '../shared/components/AddActionButton';
import AddPlayerModal from '../shared/components/AddPlayerModal';


class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContextMenu: false,
      showDeleteConfirmation: false,
      showAddPlayerDialog: false
    };

    this.addPlayer = this.addPlayer.bind(this);
    this.hideAddPlayerDialog = this.hideAddPlayerDialog.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.showModal = this.showModal.bind(this);
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

  confirmDelete() {
    this.setState({
      showContextMenu: false,
      showDeleteConfirmation: true
    });
  }

  showModal(player) {
    this.setState({
      showContextMenu: true,
      selectedPlayer: player
    });
  }

  renderRow(rowData) {
    return (<PlayerListElement
      player={rowData}
      onLongPress={() => this.showModal(rowData)}
    />);
  }

  renderSeparator(sectionID, rowID) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={styles.listSeparator}
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
      <View style={styles.mainContainer}>
        <ContextMenu
          visible={this.state.showContextMenu}
          onDelete={this.confirmDelete}
          onClose={() => this.setState({ showContextMenu: false })}
        />
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
          renderSeparator={this.renderSeparator}
        />
        <AddActionButton
          onPress={() => this.setState({ showAddPlayerDialog: true })}
        />
      </View>
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
  addPlayer: bindActionCreators(addPlayer, dispatch),
  removePlayer: bindActionCreators(removePlayer, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
