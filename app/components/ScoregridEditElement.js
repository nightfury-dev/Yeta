import * as _ from 'lodash';
import React from 'react';
import { Picker } from 'react-native';

import styles from './styles/ComponentStyles';


class ScoregridEditElement extends React.Component {
    constructor(props) {
        super(props);
        this.done = this.done.bind(this);
    }

    done(score) {
        this.props.updateScore(
            this.props.gameId, this.props.player.id, this.props.hole, score
        );
        if (this.props.afterEdit) {
            this.props.afterEdit();
        }
    }

    render() {
        const score = this.state ? this.state.score : this.props.score;

        const pickerItems = _.range(1, 15).map(
            (s) => <Picker.Item label={s.toString()} value={s} />
        );

        return (<Picker
          itemStyle={styles.baseText}
          onValueChange={this.done}
          selectedValue={score}
          mode={'dialog'}
        >
          {pickerItems}
        </Picker>);
    }
}

ScoregridEditElement.propTypes = {
    score: React.PropTypes.number.isRequired,
    player: React.PropTypes.object.isRequired,
    hole: React.PropTypes.number.isRequired,
    updateScore: React.PropTypes.func.isRequired,
    gameId: React.PropTypes.number.isRequired,
    afterEdit: React.PropTypes.func.isRequired
};

export default ScoregridEditElement;
