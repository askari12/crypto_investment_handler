import { sleep } from './src/sleepModule.js';
import { handleError } from './src/errorHandlerModule.js';
import { logger } from './src/loggerModule.js';

try {
  logger('Starting...');
  throw new Error ("LOL")
}
catch(e) {
  handleError(e)
}