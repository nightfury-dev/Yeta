import React from 'react';
import {
  Text,
  View
} from 'react-native';

import MenuItem from './MenuItem';


class Menu extends React.Component {
    render() {
        return (
            <View>
                <MenuItem label='Game' name='game' {...this.props} />
                <MenuItem label='Players' name='players' {...this.props} />
                <MenuItem label='Courses' name='courses' {...this.props} />
            </View>
        );
    }
};

export default Menu;
