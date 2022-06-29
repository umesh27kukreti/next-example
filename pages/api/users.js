import sql from "../../src/db/index";
const path = require("path");

export default async function getAllUsers(req, res) {
  //   console.log(sql);

  console.log(path);

  sql
    // .querry(`select * from users`)
    .then((connection) => {
      //   console.log(res);
      connection.query(`select * from users`).then(({ recordset }) => {
        // console.log(response.recordset);
        res.send({
          recordset,
        });
      });
    });
}
