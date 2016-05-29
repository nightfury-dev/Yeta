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
                <MenuItem label='Players' name='players' {...this.props} />
            </View>
        );
    }
};

export default Menu;
