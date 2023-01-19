import { isDev } from '@/libs/env.lib';
import chalk from 'chalk';
import morgan from 'morgan';

export default class Logger {
  public static logging = () => {
    return isDev() ? this.dev() : this.prod();
  };

  private static dev = () => {
    return morgan((tokens, req, res) => {
      console.log(tokens.req(req, res, 'headers'));
      return [
        chalk.hex('#1e90ff').bold('🍄 [News Portal] --> '),
        chalk.italic(tokens.method(req, res)),
        chalk
          .bgHex(
            parseInt(<string>tokens.status(req, res)) > 400
              ? '#ff5252'
              : '#2ed573',
          )
          .bold(tokens.status(req, res)),
        chalk.bold(tokens.url(req, res) + ' |'),
        chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
        chalk.bold('|'),
        chalk.hex('#f78fb3').bold(tokens.date(req, res, 'iso')),
        chalk.bold('|'),
        chalk.yellow(tokens['remote-addr'](req, res)),
        chalk.bold('|'),
        chalk.hex('#1e90ff')(tokens['user-agent'](req, res)),
      ].join(' ');
    });
  };

  private static prod = () => {
    return morgan('combined');
  };
}
