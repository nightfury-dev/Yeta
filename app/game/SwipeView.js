import React from 'react';
import { View, PanResponder } from 'react-native';
import PropTypes from 'prop-types';

const MOVE_THRESHOLD_PX = 75;

class SwipeView extends React.Component {
  constructor(props) {
    super(props);
    this.onPanResponderGrant = this.onPanResponderGrant.bind(this);
    this.onPanResponderRelease = this.onPanResponderRelease.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onPanResponderGrant: this.onPanResponderGrant,
      onPanResponderRelease: this.onPanResponderRelease,
      onMoveShouldSetPanResponder: (e, gestureState) =>
        gestureState.dx > 0 || gestureState.dx < 0
    });
  }

  onPanResponderGrant(e) {
    this.setState({
      touchStart: e.nativeEvent
    });
  }

  onPanResponderRelease(e) {
    const diff = this.state.touchStart.pageX - e.nativeEvent.pageX;
    const move = Math.abs(diff) > MOVE_THRESHOLD_PX;
    if (move && diff < 0) {
      this.onLeftSwipe();
    } else if (move) {
      this.onRightSwipe();
    }
  }

  onLeftSwipe() {
    if (this.props.onLeftSwipe) {
      this.props.onLeftSwipe();
    }
  }

  onRightSwipe() {
    if (this.props.onRightSwipe) {
      this.props.onRightSwipe();
    }
  }

  render() {
    return (<View
      style={this.props.style}
      {...this.panResponder.panHandlers}
    >
      {this.props.children}
    </View>);
  }
}

SwipeView.propTypes = {
  onRightSwipe: PropTypes.func.isRequired,
  onLeftSwipe: PropTypes.func.isRequired,
  children: PropTypes.any,
  style: PropTypes.any
};

export default SwipeView;
