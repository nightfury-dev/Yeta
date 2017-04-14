import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, View, ListView, Text, StyleSheet } from 'react-native';
import { Button, CheckBox, ListItem, Right } from 'native-base';

import { addPlayer } from '../actions/actionCreators';
import AddPlayerModal from '../shared/components/AddPlayerModal';
import AddActionButton from '../shared/components/AddActionButton';
import styles from './styles/SelectPlayersStyles';


class SelectPlayers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlayers: {},
      showAddPlayerDialog: false
    };

    this.addPlayer = this.addPlayer.bind(this);
    this.hideAddPlayerDialog = this.hideAddPlayerDialog.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.playersSelected = this.playersSelected.bind(this);
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

  playersSelected() {
    const selectedPlayers = this.props.players.filter(
      (p) => this.state.selectedPlayers[p.id]
    );
    this.props.playersSelected(selectedPlayers);
  }

  handleSelection(player) {
    const selectedPlayers = {
      ...this.state.selectedPlayers,
      [player.id]: !this.state.selectedPlayers[player.id]
    };
    this.setState({ selectedPlayers });
  }

  renderRow(rowData) {
    return (
      <ListItem onPress={() => this.handleSelection(rowData)}>
        <Text style={styles.baseText}>{rowData.name}</Text>
        <Right>
          <CheckBox checked={this.state.selectedPlayers[rowData.id]} />
        </Right>
      </ListItem>
    );
  }

  render() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.name !== r2.name
    }).cloneWithRows(this.props.players);
    const isPlayersSelected = _.some(this.state.selectedPlayers, p => p);
    return (
      <View style={{ flex: 1 }}>
        <AddPlayerModal
          onSave={this.addPlayer}
          onCancel={this.hideAddPlayerDialog}
          visible={this.state.showAddPlayerDialog}
        />
        <ScrollView>
          <ListView
            dataSource={dataSource}
            renderRow={this.renderRow}
            enableEmptySections
          />
        </ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button
            disabled={!isPlayersSelected}
            style={StyleSheet.flatten(styles.button)}
            onPress={this.playersSelected}
          >
            <Text style={styles.baseText}>Continue</Text>
          </Button>
        </View>
        <AddActionButton
          onPress={() => this.setState({ showAddPlayerDialog: true })}
        />
      </View>
    );
  }
}

SelectPlayers.propTypes = {
  addPlayer: React.PropTypes.func.isRequired,
  players: React.PropTypes.array.isRequired,
  playersSelected: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  players: state.players
});

const mapDispatchToProps = (dispatch) => ({
  addPlayer: bindActionCreators(addPlayer, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectPlayers);
