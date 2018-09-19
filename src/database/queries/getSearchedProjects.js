const dbconnection = require('../db_connection');

const getSearchedProjects = (searchParams, cb) => {
  // const sql = {
  //   text: "SELECT * FROM projects where name like '%$1%'",
  //   Values: [searchParams.projectname],
  // };
  const sql = "SELECT projects.*, users.name as ownername, users.location, users.id as userid FROM projects inner join users on projects.user_id = users.id where projects.name like '%" + searchParams.projectname + "%';"
  dbconnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};
module.exports = getSearchedProjects;
