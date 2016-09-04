import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

import ScoregridViewElement from './ScoregridViewElement';
import ScoregridEditElement from './ScoregridEditElement';
import NumberPicker from './NumberPicker';
import styles from '../styles/styles';


const style = {
    flex: 7,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#DF878B',
    alignItems: 'center'
};

const nameStyle = {
    flex: 6
};

class ScoreGridElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {edit: false};
    }

    showEditView() {
        this.setState({edit: true});
    }

    showDefaultView(e) {
        this.setState({edit: false});
    }

    render() {
        if (this.state.edit) {
            this.props.stateChanged('edit');
            return <ScoregridEditElement {...this.props} afterEdit={this.showDefaultView.bind(this)}/>;
        } else {
            this.props.stateChanged('view');
            return <ScoregridViewElement {...this.props} longPress={this.showEditView.bind(this)} />;
        }
    }
};

export default ScoreGridElement;
