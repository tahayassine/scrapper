import * as dotenv from 'dotenv';

let config: dotenv.DotenvParseOutput | undefined;

const defaultConfig = {
  PORT: 3000,
  BROWSER_HEADLESS: true,
};

const envConfig = getConfig();

function getConfig() {
  if (config) {
    return config;
  }
  config = dotenv.config().parsed;
  return config;
}

export default {
  ...defaultConfig,
  ...envConfig,
};
