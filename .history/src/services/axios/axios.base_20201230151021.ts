import axios from "axios";
import settings from "../../settings";

const _base = axios.create({
  baseURL: `${settings.SERVER}/api`
});
_base.interceptors.request.use(function(config) {
  let token = localStorage.getItem("USER_TOKEN");
  if (token) token = token.replace('"', "").replace('"', "");
  config.headers.Authorization = `bearer ${token}`;
  return config;
});

export default _base;
