import { withConfiguration } from "./config";
import { post } from "./fetcher";

const api = "babillons-api";

export const postRoomID = async () => {
  return withConfiguration(async (config) => {
    const endpoint = `${config[api]}/room`;
    return post(endpoint, {});
  });
};
