import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { CheckBox, Button, List, ListItem } from 'native-base';

import styles from './styles/SelectCourseScreenStyles';


class SelectCourseScreen extends React.Component {
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.courseSelected = this.courseSelected.bind(this);
    }

    getSelectedCourse() {
        if (this.state && this.state.selectedCourse) {
            return this.state.selectedCourse;
        }
        return null;
    }

    courseSelected() {
        if (this.state.selectedCourse) {
            this.props.courseSelected(this.state.selectedCourse);
        }
    }

    handleSelection(course) {
        this.setState({
            selectedCourse: course
        });
    }

    renderRow(rowData) {
        const checked = this.state && this.state.selectedCourse &&
            this.state.selectedCourse.name === rowData.name;
        return (<ListItem button onPress={() => this.handleSelection(rowData)}>
          <Text style={styles.baseText}>{rowData.name}</Text>
          <CheckBox checked={checked} />
        </ListItem>);
    }

    render() {
        return (<View>
          <List
            dataArray={this.props.courses}
            renderRow={this.renderRow}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Button onPress={this.courseSelected}>Continue</Button>
          </View>
        </View>);
    }
}

SelectCourseScreen.propTypes = {
    courseSelected: React.PropTypes.func.isRequired,
    courses: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    courses: state.courses
});

export default connect(mapStateToProps)(SelectCourseScreen);
