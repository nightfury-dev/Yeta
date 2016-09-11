import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { Button, InputGroup, Input } from 'native-base';

import HoleCountSwitcher from './HoleCountSwitcher';
import HoleGrid from './HoleGrid';
import styles from '../styles/styles';


const DEFAULT_PAR = 3;
const DEFAULT_HOLE_COUNT = 9;

class AddCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pars: Array(DEFAULT_HOLE_COUNT).fill(DEFAULT_PAR),
            name: ''
        };

        this.addRow = this.addRow.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.parsChanged = this.parsChanged.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    addRow() {
        this.setState({
            pars: [...this.state.pars, DEFAULT_PAR]
        });
    }

    removeRow() {
        this.setState({
            pars: _.initial(this.state.pars)
        });
    }

    saveCourse() {
        if (this.state.name) {
            this.props.addCourse(this.state.name, this.state.pars, () => {
                this.props.navigator.replace('menu');
            });
        }
    }

    parsChanged(updatedPars) {
        this.setState({
            pars: updatedPars
        });
    }

    render() {
        return (<ScrollView style={styles.background}>
          <HoleCountSwitcher
            holeCountIncreased={this.addRow}
            holeCountDecreased={this.removeRow}
          />
          <View>
            <Text>Name:</Text>
            <InputGroup borderType="rounded">
              <Input
                placeholder="Course name"
                style={styles.input}
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
              />
            </InputGroup>
          </View>

          <HoleGrid pars={this.state.pars} onParsChanged={this.parsChanged} />

          <Button
            style={styles.centeredItem}
            onPress={this.saveCourse}
          >
            Save course
          </Button>
        </ScrollView>);
    }
}
AddCourse.propTypes = {
    addCourse: React.PropTypes.func.isRequired,
    navigator: React.PropTypes.object.isRequired
};

export default AddCourse;
