const DEFAULT_ENV = "development";

/**
 * Environments
 */
const Environments = {
  "development": {
    url: "<YOUR_LOCAL_URL>",
    port: "<YOUR_LOCAL_PORT>",
  },
  "itg": {
    url: "<YOUR_ITG_URL>",
    port: "<YOUR_ITG_URL>",
  },
  "production": {
    url: "<YOUR_PROD_URL>",
    port: "<YOUR_PROD_URL>",
  },
};

/**
 * @method getEnvironMentConfig
 * @param {*} env
 */
const getEnvironMentConfig = (env) => {
  let url = "";
  switch (env) {
    case "development":
      url = Environments[env].url + ":" + Environments[env].port;
      break;
    case "itg":
      url = Environments[env].url + ":" +  Environments[env].port;
      break;
    case "production":
      url = Environments[env].url + ":" +  Environments[env].port;
      break;
    default:
      url = "";
  }
  return url;
};

const BASE_URL = getEnvironMentConfig(process.env.NODE_ENV || DEFAULT_ENV);

/**
 * List of API endpoints
 */

const API_ENDPOINTS = {
  /*** Your API ENDPOINTS goes here */
};

export { BASE_URL, API_ENDPOINTS };
