import React from 'react';
import {View} from 'react-native';


const MOVE_THRESHOLD_PX = 75;

class SwipeView extends React.Component {
    onResponderGrant(e) {
        this.setState({
            touchStart: e.nativeEvent
        })
    }

    onStartShouldSetResponder(e) {
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
        return (
            <View
                style={this.props.style}
                onResponderGrant={this.onResponderGrant.bind(this)}
                onStartShouldSetResponder={this.onStartShouldSetResponder.bind(this)}
                onResponderRelease={this.onResponderRelease.bind(this)}>
                {this.props.children}
            </View>
        );
    }
};


export default SwipeView;
