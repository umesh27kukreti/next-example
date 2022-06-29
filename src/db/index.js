const sql = require("mssql");

const sqlConfig = {
  user: "SA", //process.env.DB_USER,
  password: "MyPass@word", //process.env.DB_PWD,
  database: "users_info", //process.env.DB_NAME,
  server: "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export default sql.connect(sqlConfig);
