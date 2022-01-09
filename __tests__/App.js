const wdio = require('webdriverio');

const opts = {
  port: 4723,
  desiredCapabilities: {
    platformName: 'iOS',
    platformVersion: '11.2',
    deviceName: 'iPhone 7',
    app: './ios/build/Build/Products/Debug-iphonesimulator/yeta.app',
    automationName: 'XCUITest'
  }
};

const client = wdio.remote(opts);

client.init().end();
