import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight
} from 'react-native';

import HoleCountSwitcher from './HoleCountSwitcher';
import HoleGrid from './HoleGrid';
import { addCourse } from '../data/courses';


const DEFAULT_PAR = 3;
const DEFAULT_HOLE_COUNT = 9;

class AddCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pars: Array(DEFAULT_HOLE_COUNT).fill(DEFAULT_PAR),
            name: ''
        };
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
            addCourse(this.state.name, this.state.pars);
            this.props.addCourse(this.state.name, this.state.pars);
            this.props.navigator.replace('menu');
        }
    }

    parsChanged(updatedPars) {
        this.setState({
            pars: updatedPars
        });
    }

    render() {
        return (
            <ScrollView>
                <HoleCountSwitcher
                    holeCountIncreased={this.addRow.bind(this)}
                    holeCountDecreased={this.removeRow.bind(this)} />
                <View>
                    <Text>Name:</Text>
                    <TextInput
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name} />
                </View>

                <HoleGrid
                    pars={this.state.pars}
                    onParsChanged={this.parsChanged.bind(this)} />

                <TouchableHighlight onPress={this.saveCourse.bind(this)}>
                    <Text>Save course</Text>
                </TouchableHighlight>
            </ScrollView>
        );
    }
};

export default AddCourse;
