/**
 * WebDriver Configuration for Local Testing (Android Emulator)
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
import {config} from './wdio.conf';

config.capabilities = [
  {
    maxInstances: 1,
    platformName: 'Android',
    deviceName: 'Android Emulator', // Needed to connect to emulator
    // Change the path below to find the .apk file
    app: path.resolve(
      __dirname,
      '../android/app/build/outputs/apk/release/app-release.apk',
    ),
    automationName: 'UiAutomator2',
    autoGrantPermissions: true,
    newCommandTimeout: 180,
  },
];

exports.config = config;
