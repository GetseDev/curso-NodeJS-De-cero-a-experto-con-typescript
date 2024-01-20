const {httpClientPlugin: http} = require("../plugins/http-client.plugin");


const getPokemonById = async(id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const {data} = await http.get(url);

  return data.name;
}

module.exports = {
  getPokemonById
}
