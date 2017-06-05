import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, InputGroup, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';

import Row from './Row';
import TextWrapper from './TextWrapper';
import ButtonsWrapper from './ButtonsWrapper';
import RowText from './RowText';
import Screen from '../shared/components/Screen';
import HoleGrid from './HoleGrid';
import styles from './styles/AddCourseStyles';
import NumberSwitcher from '../shared/components/NumberSwitcher';
import CoursesActions from '../redux/CoursesRedux';


const DEFAULT_PAR = 3;
const DEFAULT_HOLE_COUNT = 9;


class AddCourse extends React.Component {
  constructor(props) {
    super(props);

    const pars = props.course ?
          _.values(props.course.holes).map((hole) => hole.par) :
          Array(DEFAULT_HOLE_COUNT).fill(DEFAULT_PAR);
    const name = props.course ? props.course.name : '';

    this.state = { pars, name };

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
    if (this.props.course) {
      this.props.updateCourse(
                this.props.course,
                this.state.name,
                this.state.pars
            );
    } else {
      this.props.addCourse(this.state.name, this.state.pars);
    }
    Actions.menu();
  }

  parsChanged(updatedPars) {
    this.setState({
      pars: updatedPars
    });
  }

  render() {
    return (
      <Screen>
        <ScrollView>
          <Row>
            <TextWrapper>
              <RowText>Number of holes</RowText>
            </TextWrapper>
            <ButtonsWrapper>
              <NumberSwitcher
                number={this.state.pars.length}
                onDecrease={this.removeRow}
                onIncrease={this.addRow}
              />
            </ButtonsWrapper>
          </Row>
          <View>
            <InputGroup borderType="rounded">
              <Input
                placeholder="Course name"
                style={StyleSheet.flatten(styles.input)}
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
              />
            </InputGroup>
          </View>
          <HoleGrid pars={this.state.pars} onParsChanged={this.parsChanged} />
          <Button
            style={StyleSheet.flatten([styles.button, styles.centeredItem])}
            onPress={this.saveCourse}
          >
            <RowText>Save course</RowText>
          </Button>
        </ScrollView>
      </Screen>
    );
  }
}

AddCourse.propTypes = {
  addCourse: React.PropTypes.func.isRequired,
  updateCourse: React.PropTypes.func.isRequired,
  course: React.PropTypes.object
};

const mapDispatchToProps = (dispatch) => ({
  addCourse: (name, pars) => dispatch(CoursesActions.addCourse(name, pars)),
  updateCourse: (course, name, pars) =>
    dispatch(CoursesActions.updateCourse(course, name, pars))
});

export default connect(null, mapDispatchToProps)(AddCourse);
