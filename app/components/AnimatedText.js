import React from 'react';
import { Animated, Text, View } from 'react-native';

import styles from './styles/AnimatedTextStyles';


class AnimatedText extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.children !== nextProps.children;
    }

    render() {
        const animatedValue = new Animated.Value(0.3);
        Animated.timing(
            animatedValue,
            {toValue: 1},
        ).start();
        return (<Animated.Text style={[styles.baseText, {opacity: animatedValue}]}>
          {this.props.children}
        </Animated.Text>);
    }
}

export default AnimatedText;
