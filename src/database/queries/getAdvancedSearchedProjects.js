const dbconnection = require('../db_connection');

const getAdvancedSearchedProjects = (searchParams, cb) => {
//   const sql = {
//     text: "SELECT projects.*, users.name as ownername, users.location, users.id as userid FROM projects inner join users on projects.user_id = users.id where projects.field = '$1' and projects.fund <= '$2' and projects.fund >= '$3';",
//     Values: [searchParams.sector, searchParams.maxfund, searchParams.minfund],
//   };
  const sql = `SELECT projects.*, users.name as ownername, users.location, users.id as userid FROM projects inner join users on projects.user_id = users.id where projects.field = '${searchParams.sector  }' and projects.fund <= '${ searchParams.maxfund }' and projects.fund >= '${ searchParams.minfund }';`;

  dbconnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};
module.exports = getAdvancedSearchedProjects;
