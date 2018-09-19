
const dbconnection = require('../db_connection');

const getPopularProjects = (cb) => {
  const sql = {
    text: 'SELECT projects.*, users.name as ownername, users.location,users.id as userid FROM projects inner join users on projects.user_id = users.id limit 5;',
  };
  dbconnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};
module.exports = getPopularProjects;
