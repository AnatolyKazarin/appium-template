/**
 * WebDriver Configuration for Device Farm (Android)
 */
import {config} from './wdio.conf';

config.capabilities = [
  {
    maxInstances: 1,
    autoGrantPermissions: true,
    newCommandTimeout: 180,
  },
];

exports.config = config;
