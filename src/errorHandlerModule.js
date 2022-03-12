import chalk from 'chalk'

function _getCallerFile() {
  var originalFunc = Error.prepareStackTrace;

  var callerfile;
  try {
      var err = new Error();
      var currentfile;

      Error.prepareStackTrace = function (err, stack) { return stack; };

      currentfile = err.stack.shift().getFileName();

      while (err.stack.length) {
          callerfile = err.stack.shift().getFileName();

          if(currentfile !== callerfile) break;
      }
  } catch (e) {}

  Error.prepareStackTrace = originalFunc; 

  return callerfile;
}

const errorHandler = (error) => {
  const callerFileFullPath = _getCallerFile();
  const callerFile = callerFileFullPath.split('/').pop();
  console.log(`${chalk.red("*****************************")}`)
  console.log(`ERROR Caller File: ${chalk.bgRed(callerFile)}`);
  console.log(`ERROR Message: ${chalk.bgRed(error.message)}`);
  console.log(`${chalk.red("*****************************")}`)
}

export function handleError(e) {
  errorHandler(e);
}