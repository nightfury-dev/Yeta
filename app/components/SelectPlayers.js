import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  ListView,
  View,
  TouchableHighlight
} from 'react-native';

import styles from '../styles/styles';


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
        const text = (rowData.selected ? '* ' : '') + rowData.name;
        return (<TouchableHighlight
          onPress={() => this.handleSelection(rowData)}
        >
          <Text style={styles.listItem}>{text}</Text>
        </TouchableHighlight>);
    }

    render() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.name !== r2.name
        }).cloneWithRows(this.state.players);

        return (<View style={styles.background}>
          <ListView dataSource={dataSource} renderRow={this.renderRow} />
          <TouchableHighlight
            style={styles.menuItem}
            onPress={this.playersSelected}
          >
            <Text style={styles.menuItemText}>Continue</Text>
          </TouchableHighlight>
        </View>);
    }
}

SelectPlayers.propTypes = {
    players: React.PropTypes.array.isRequired,
    playersSelected: React.PropTypes.func.isRequired
};

export default SelectPlayers;
