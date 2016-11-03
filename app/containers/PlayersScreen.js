import React from 'react';
import { View, ListView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'native-base';

import { addPlayer, removePlayer } from '../actions/actionCreators';
import AddPlayerInput from '../components/AddPlayerInput';
import ContextMenu from '../components/ContextMenu';
import Confirmation from '../components/Confirmation';
import PlayerListElement from '../components/PlayerListElement';
import styles from './styles/PlayersScreenStyles';


class PlayersScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showContextMenu: false,
            showDeleteConfirmation: false,
            showAddPlayerDialog: false
        };

        this.confirmDelete = this.confirmDelete.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.showModal = this.showModal.bind(this);
        this.deletePlayer = this.deletePlayer.bind(this);
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

    renderSeparator() {
        return (<View style={styles.listSeparator} />);
    }

    render() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.name !== r2.name
        }).cloneWithRows(this.props.players);
        const removeName = this.state.selectedPlayer ?
            this.state.selectedPlayer.name : '';

        const input = this.props.showAddPlayerDialog ?
          <AddPlayerInput
            onSave={this.addPlayer}
            onCancel={() => this.setState({ showAddPlayerDialog: false })}
          /> : null;

        return (<View style={styles.mainContainer}>
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
          {input}
          <ListView
            dataSource={dataSource}
            renderRow={this.renderRow}
            renderSeparator={this.renderSeparator}
          />
        </View>);
    }
}

PlayersScreen.propTypes = {
    removePlayer: React.PropTypes.func.isRequired,
    players: React.PropTypes.array.isRequired,
    showAddPlayerDialog: React.PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    players: state.players,
    showAddPlayerDialog: state.UI.showAddPlayerDialog
});

const mapDispatchToProps = (dispatch) => ({
    removePlayer: bindActionCreators(removePlayer, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersScreen);
