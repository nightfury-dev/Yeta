import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles/AnimatedTextStyles';


class AnimatedText extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.children !== nextProps.children;
  }

  render() {
    const animatedValue = new Animated.Value(0.3);
    Animated.timing(animatedValue, { toValue: 1 }).start();
    return (
      <Animated.Text style={[styles.baseText, { opacity: animatedValue }]}>
        {this.props.children}
      </Animated.Text>
    );
  }
}

AnimatedText.propTypes = {
  children: PropTypes.any.isRequired
};


export default AnimatedText;
