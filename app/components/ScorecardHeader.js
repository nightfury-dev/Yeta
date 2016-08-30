import React from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

import ScorecardEntry from './ScorecardEntry';
import styles from '../styles/styles';


class ScorecardHeader extends React.Component {
    render() {
        return <ScorecardEntry
            collection={this.props.players}
            getContent={(player) => player.name}
            firstCellContent={'# (par)'}/>;
    }
};

export default ScorecardHeader;
