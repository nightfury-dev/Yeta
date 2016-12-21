import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, ListView } from 'react-native';
import { Button } from 'native-base';

import PlayerListElement from '../shared/components/PlayerListElement';
import styles from './styles/SelectPlayersStyles';


class SelectPlayers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.players.map((p) =>
                _.extend({ selected: false }, p)
            )
    };

    this.renderRow = this.renderRow.bind(this);
    this.playersSelected = this.playersSelected.bind(this);
  }

  playersSelected() {
    const selectedPlayers = this.state.players.filter((p) => p.selected);
    this.props.playersSelected(selectedPlayers);
  }

  handleSelection(player) {
    const i = _.findIndex(this.state.players, (p) => p.id === player.id);
    const players = [
      ...this.state.players.slice(0, i),
            { ...player, selected: !player.selected },
      ...this.state.players.slice(i + 1)
    ];
    this.setState({ players });
  }

  renderRow(rowData) {
    return (<PlayerListElement
      player={rowData}
      selected={rowData.selected}
      onPress={() => this.handleSelection(rowData)}
    />);
  }

  renderSeparator() {
    return (<View style={styles.listSeparator} />);
  }

  render() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.name !== r2.name
    }).cloneWithRows(this.state.players);
    const isPlayersSelected = _.some(this.state.players, (p) => p.selected);
    return (
      <ScrollView>
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow}
          renderSeparator={this.renderSeparator}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button
            disabled={!isPlayersSelected}
            style={styles.button}
            onPress={this.playersSelected}
          >
            Continue
          </Button>
        </View>
      </ScrollView>
    );
  }
}

SelectPlayers.propTypes = {
  players: React.PropTypes.array.isRequired,
  playersSelected: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  players: state.players
});

export default connect(mapStateToProps)(SelectPlayers);
