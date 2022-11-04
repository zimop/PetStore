const secrets = require("../secrets.json");

const mysql = require("mysql");

const createConnection = () => {
  return mysql.createConnection({
    host: "petstore.cfb1caugxl5o.ap-southeast-2.rds.amazonaws.com",
    user: "app",
    password: secrets.dbPassword,
    database: "petstore",
  });
};

const query = (sql) => {
  let connection = createConnection();
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results, fields) => {
      connection.end();
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

module.exports = {
  query,
};
