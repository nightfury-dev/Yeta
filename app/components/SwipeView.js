import React from 'react';
import { View } from 'react-native';


const MOVE_THRESHOLD_PX = 75;

class SwipeView extends React.Component {
    constructor(props) {
        super(props);
        this.onResponderGrant = this.onResponderGrant.bind(this);
        this.onStartShouldSetResponder = this.onStartShouldSetResponder.bind(
            this
        );
        this.onResponderRelease = this.onResponderRelease.bind(this);
    }
    onResponderGrant(e) {
        this.setState({
            touchStart: e.nativeEvent
        });
    }

    onStartShouldSetResponder() {
        return true;
    }

    onResponderRelease(e) {
        const diff = this.state.touchStart.locationX - e.nativeEvent.locationX;
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
          onResponderGrant={this.onResponderGrant}
          onStartShouldSetResponder={this.onStartShouldSetResponder}
          onResponderRelease={this.onResponderRelease}
        >
          {this.props.children}
        </View>);
    }
}

SwipeView.propTypes = {
    onRightSwipe: React.PropTypes.func.isRequired,
    onLeftSwipe: React.PropTypes.func.isRequired,
    children: React.PropTypes.any,
    style: React.PropTypes.any
};

export default SwipeView;
