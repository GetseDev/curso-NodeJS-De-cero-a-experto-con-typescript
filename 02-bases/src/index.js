//require('./js-foundation/02-destructuring');
//const {getById} = require('./js-foundation/03-callbacks');
//let {emailTemplate} = require('./js-foundation/01-template');
//require('./js-foundation/04-factory');
// const {buildMakePerson} = require("./js-foundation/04-factory");
// const {getUUID, getAge} = require("./plugins");
const {getPokemonById} = require("./js-foundation/06-promises");

//const makePerson = buildMakePerson({getUUID, getAge});

//const obj = {name: 'Harley Quinn', birthDate: '1992-01-01'};

//const person = makePerson(obj);

getPokemonById(1).then(console.log);