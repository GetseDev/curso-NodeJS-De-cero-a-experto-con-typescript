const {getAge, getUUID} = require('../plugins');

const buildMakePerson = ({getUUID, getAge}) => {
  return ({name, birthDate}) => {
    return {
      id: getUUID(),
      name,
      birthDate,
      age: getAge(birthDate)
    }
  }
}

const buildPerson =

module.exports = {
  buildMakePerson,
}