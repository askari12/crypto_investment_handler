import { sleep } from './src/sleepModule.js';
import { handleError } from './src/errorHandlerModule.js';

try {
  throw new Error ("LOL")
}
catch(e) {
  handleError(e)
}