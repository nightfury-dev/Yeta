import React from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

import styles from '../styles/styles';


class ScorecardHeader extends React.Component {
    render() {
        const playerNames = this.props.players.map(p => <Text>{p.name}</Text>);
        return (
            <View style={styles.scoreCardRow}>
                <Text># (par)</Text>
                {playerNames}
            </View>
        );
    }
};

export default ScorecardHeader;
