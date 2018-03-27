import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';

import Confirmation from '../shared/components/Confirmation';
import AddActionButton from '../shared/components/AddActionButton';
import Screen from '../shared/components/Screen';
import ListRow from './ListRow';
import CoursesActions from '../redux/CoursesRedux';


class Courses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDeleteConfirmation: false,
      selectedCourse: null
    };

    this.confirmDelete = this.confirmDelete.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  deleteCourse() {
    this.props.removeCourse(this.state.selectedCourse.id);
    this.setState({
      showDeleteConfirmation: false,
      selectedCourse: null
    });
  }

  confirmDelete(course) {
    this.setState({
      showDeleteConfirmation: true,
      selectedCourse: course
    });
  }

  renderRow(rowData) {
    return (
      <ListRow
        text={rowData.name}
        onEdit={() => Actions.addcourse({ course: rowData })}
        onDelete={() => this.confirmDelete(rowData)}
      />
    );
  }

  render() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) =>
                r1.name !== r2.name || !_.isEqual(r1.holes, r2.holes)
    }).cloneWithRows(this.props.courses);
    const removeName = this.state.selectedCourse ?
            this.state.selectedCourse.name : '';
    return (
      <Screen>
        <Confirmation
          onConfirm={this.deleteCourse}
          onCancel={() => this.setState({ showDeleteConfirmation: false })}
          message={`Remove course '${removeName}'?`}
          visible={this.state.showDeleteConfirmation}
        />
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow}
          enableEmptySections
        />
        <AddActionButton onPress={() => Actions.addcourse()} />
      </Screen>
    );
  }
}

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
  removeCourse: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  courses: state.courses
});

const mapDispatchToProps = (dispatch) => ({
  removeCourse: (id) => dispatch(CoursesActions.removeCourse(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
