const secrets = require("../secrets.json");

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "petstore.cfb1caugxl5o.ap-southeast-2.rds.amazonaws.com",
  user: "app",
  password: secrets.dbPassword,
  database: "petstore",
});

const query = (sql) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

module.exports = {
  connection,
  query,
};
