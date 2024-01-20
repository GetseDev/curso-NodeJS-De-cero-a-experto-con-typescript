const users = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Sara'
  }
]

const getById = (id, callback) => {
  const user = users.find(user => user.id === id);

  if(!user)
    return callback(new Error(`Usuario no encontrado ${id}`));


  return callback(null, user);
}

module.exports = {
  getById,
}