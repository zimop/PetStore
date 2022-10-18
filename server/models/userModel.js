let mysqlHandle = require("../mysqlHandle.js");
let mysql = require("mysql");
let bcrypt = require("bcryptjs");

const createUser = async (
  email,
  firstName,
  lastName,
  password,
  isManager = false
) => {
  let query = `INSERT INTO Users
    (Email, FirstName, LastName, Password, IsManager)
    VALUES(
        ${mysql.escape(email)},
        ${mysql.escape(firstName)},
        ${mysql.escape(lastName)},
        ${mysql.escape(bcrypt.hashSync(password))},
        ${mysql.escape(isManager)}
    );`;
  let result = await mysqlHandle.query(query);
  console.log(result);
  return result.insertId;
};

const getUser = async (userId) => {
  let query = `SELECT * FROM Users WHERE UserId=${mysql.escape(userId)};`;
  let result = await mysqlHandle.query(query);
  return result[0];
};

const getUserByEmail = async (userEmail) => {
  let query = `SELECT * FROM Users WHERE Email=${mysql.escape(userEmail)};`;
  let result = await mysqlHandle.query(query);
  return result[0];
};

module.exports = {
  createUser,
  getUser,
  getUserByEmail,
};
