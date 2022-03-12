import chalk from "chalk"

const _loggerT = (message , tag) => {
  console.log(chalk.bgBlue("TAG"), chalk.blueBright(tag) , chalk.bgBlue("MESSAGE"), chalk.blueBright(message));
}

const _loggerM = (message) => {
  console.log(chalk.bgBlue("MESSAGE"), chalk.blueBright(message));
}

export function logger(m , t) {
  if (t)
    _loggerT(m, t)
  else
    _loggerM(m)
}