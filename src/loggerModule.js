import chalk from "chalk"

const _logger = (message , tag = "Default Tag") => {
  console.log(chalk.bgBlue("TAG"), chalk.blueBright(tag) , chalk.bgBlue("MESSAGE"), chalk.blueBright(message));
}

export function logger(m , t) {
  _logger(m, t)
}