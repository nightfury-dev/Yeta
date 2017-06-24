/* global __DEV__, require */

/* eslint import/no-extraneous-dependencies: 0, global-require: 0 */
const Reactotron = __DEV__ && require('reactotron-react-native').default;
const trackGlobalErrors = __DEV__ &&
  require('reactotron-react-native').trackGlobalErrors;
const sagaPlugin = __DEV__ && require('reactotron-redux-saga');

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

  /* eslint no-console: 0 */
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
