import { withConfiguration } from "./config";
import { get } from "./fetcher";

const api = "babillons-api";

export const getHelloMessage = async () => {
  return withConfiguration(async (config) => {
    const endpoint = `${config[api]}/`;
    return get(endpoint);
  });
};
