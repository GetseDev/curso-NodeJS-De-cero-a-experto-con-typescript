const axios = require("axios");

const httpClientPlugin = {
  get: async (url) => await axios.get(url),

  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async (url) => {},

}


module.exports = {
  httpClientPlugin
}