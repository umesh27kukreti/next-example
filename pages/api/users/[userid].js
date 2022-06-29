import sql from "../../../src/db";

export default function getUserInfo(req, res) {
  const userid = req.query.userid;

  console.log("userid", res);
  if (!userid) {
    res.send({
      message: "Please send valid user id",
    });
  }

  sql.then((connection) => {
    connection
      .query(`select * from users where user_id=${userid}`)
      .then(({ recordset }) => {
        res.send({
          recordset,
        });
      });
  });
}
