/* global __DEV__, require */
import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga'

// const Reactotron = __DEV__ && require('reactotron-react-native').default;
// const trackGlobalErrors = __DEV__ &&
//     require('reactotron-react-native').trackGlobalErrors;
if (__DEV__) {
    Reactotron
    .configure({
        name: 'Yet Another Discgolf App'
    })
    // forward all errors to Reactotron
    .use(trackGlobalErrors({
        // ignore all error frames from react-native (for example)
        veto: (frame) =>
            frame.fileName.indexOf('/node_modules/react-native/') >= 0
    }))
    .use(sagaPlugin())
    // let's connect!
    .connect();

    console.tron = Reactotron;
} else {
    console.tron = {
        log: () => false,
        warn: () => false,
        error: () => false,
        display: () => false,
        image: () => false
    };
}
