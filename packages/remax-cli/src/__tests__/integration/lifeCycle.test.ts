import * as path from 'path';
import { testBuildApp } from './helpers/runTest';
import { Platform } from '@remax/types';

describe('use lifeCycle in ali app', () => {
  const cwd = path.resolve(__dirname, 'fixtures/lifeCycle/expected');
  testBuildApp('lifeCycle', Platform.ali, cwd, { externalsIgnore: ['@remax/runtime'] });
});
