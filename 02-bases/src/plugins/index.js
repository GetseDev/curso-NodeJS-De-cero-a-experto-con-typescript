const {getAge} = require('../plugins/get-age.plugin');
const {getUUID} = require("../plugins/get-id-plugin");
const {httpClientPlugin} = require("./http-client.plugin");

module.exports = {
  getAge,
  getUUID,
  httpClientPlugin
}