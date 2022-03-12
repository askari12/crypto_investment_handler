import chalk from 'chalk'

const errorHandler = (error) => {
  console.log(`ERROR : ${chalk.bgRed(error.message)}`);
}

export function handleError(e) {
  errorHandler(e);
}