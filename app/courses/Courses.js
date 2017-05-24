import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import AddActionButton from '../shared/components/AddActionButton';
import Screen from '../shared/components/Screen';
import ListRow from './ListRow';


class Courses extends React.Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(rowData) {
    return (
      <ListRow
        text={rowData.name}
        onEdit={() => Actions.addcourse({ course: rowData })}
      />
    );
  }

  render() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) =>
                r1.name !== r2.name || !_.isEqual(r1.holes, r2.holes)
    }).cloneWithRows(this.props.courses);
    return (
      <Screen>
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
  courses: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  courses: state.courses
});

export default connect(mapStateToProps)(Courses);
