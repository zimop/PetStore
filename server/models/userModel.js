let mysqlHandle = require("../mysqlHandle.js");
let mysql = require("mysql");
let bcrypt = require("bcryptjs");

const createUser = (
  email,
  firstName,
  lastName,
  password,
  isManager = false
) => {
  query = `INSERT INTO Users
    (Email, FirstName, LastName, Password, IsManager)
    VALUES(
        ${mysql.escape(email)},
        ${mysql.escape(firstName)},
        ${mysql.escape(lastName)},
        ${mysql.escape(bcrypt.hashSync(password))},
        ${mysql.escape(isManager)},
    );`;
};

module.exports = {
  createUser,
};
