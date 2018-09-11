const dbconnection = require('../db_connection');

const addUser = (object, cb) => {
  const sql = {
    text: 'INSERT INTO users(name, email, pass, location, spec, occupation, linkedin, facebook, mobile, img, description) VALUES ($1, $2, $3, $4, $5,$6, $7, $8, $9, $10, $11);',
    values: [object.name, object.email, object.hash, object.location, object.spec, object.occupation, object.linkedin, object.facebook, object.mobile, object.img, object.description],
  };
  dbconnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = addUser;
