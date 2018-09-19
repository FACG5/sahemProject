const dbconnection = require('../db_connection');

const addUser = (object, cb) => {
  let sql = {
    text: 'INSERT INTO users(name, email, pass, location, spec, occupation, linkedin, facebook, mobile, img, description) VALUES ($1, $2, $3, $4, $5,$6, $7, $8, $9, $10, $11);',
    values: [object.name,
      object.email,
      object.hash,
      object.location,
      object.spec,
      object.occupation,
      object.linkedin,
      object.facebook,
      object.mobile,
      object.img,
      object.description],
  };

  dbconnection.query(sql, (inserterr) => {
    if (inserterr) {
      cb(inserterr);
    } else {
      sql = {
        text: 'select * from users where email = $1',
        values: [object.email],
      };
      dbconnection.query(sql, (selecterr, res) => {
        if (selecterr) {
          cb(selecterr);
        }
        cb(null, res.rows[0]);
      });
    }
  });
};

module.exports = addUser;
