import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { Button, InputGroup, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { addCourse } from '../actions/actionCreators';
import HoleCountSwitcher from '../components/HoleCountSwitcher';
import HoleGrid from '../components/HoleGrid';
import styles from './styles/AddCourseScreenStyles';


const DEFAULT_PAR = 3;
const DEFAULT_HOLE_COUNT = 9;

class AddCourseScreen extends React.Component {
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
        this.props.addCourse(this.state.name, this.state.pars);
        Actions.menu();
    }

    parsChanged(updatedPars) {
        this.setState({
            pars: updatedPars
        });
    }

    render() {
        return (<ScrollView style={styles.mainContainer}>
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

AddCourseScreen.propTypes = {
    addCourse: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    addCourse: bindActionCreators(addCourse, dispatch)
});

export default connect(null, mapDispatchToProps)(AddCourseScreen);
