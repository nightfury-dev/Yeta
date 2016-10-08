import './app/ReactotronConfig';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import store from './app/store';
import App from './app/App';

console.disableYellowBox = true;
function DiscgolfApp() {
    return (<Provider store={store}>
      <App />
    </Provider>);
}

AppRegistry.registerComponent('DiscgolfApp', () => DiscgolfApp);
