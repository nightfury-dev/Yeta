import React from 'react';
import {
    Text,
    View
} from 'react-native';

import MenuItem from './MenuItem';
import styles from '../styles/styles';


class Menu extends React.Component {
    render() {
        return (
            <View style={styles.background}>
                <MenuItem label='Game' name='initGame' {...this.props} />
                <MenuItem label='Resume game' name='resumeGame' {...this.props} />
                <MenuItem label='Players' name='players' {...this.props} />
                <MenuItem label='Courses' name='courses' {...this.props} />
            </View>
        );
    }
};


export default Menu;
