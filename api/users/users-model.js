const uuid = require("uuid");

function generateId() {
  return uuid.v4();
}

const allUsers = [];

const defaultUsers = [
  { user_id: generateId(), username: "Batu", password: "1234" },
  { user_id: generateId(), username: "Emre", password: "4321" },
];

defaultUsers.forEach((x) => {
  allUsers.push(x);
});

function getAllUsers() {
  return allUsers;
}

function insert(user) {
  user.id = generateId();
  allUsers.push(user);
  return user;
}

function findUser(username, password) {
  let existUser = allUsers.find(
    (x) => x.username == username && x.password == password
  );
  return existUser;
}

module.exports = {
  getAllUsers,
  insert,
  findUser,
};
