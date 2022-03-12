import { handleError } from './src/helpers/errorHandlerModule.js';
import { welcomeScreeen } from './src/UserFlow/welcomeScreen.js';

try {
  await welcomeScreeen();
}
catch(e) {
  handleError(e)
}