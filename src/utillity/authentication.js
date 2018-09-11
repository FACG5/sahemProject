const { parse } = require('cookie');
const { sign, verify } = require('jsonwebtoken');
require('env2')('config.env');

const createCookie = (userId, cb) => {
  const data = {
    id: userId,
  };

  sign(data, process.env.SECRET, (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  });
};

const getTokenData = (data, cb) => {
  verify(data, process.env.SECRET, (err, decoded) => {
    if (err) {
      return cb(new TypeError());
    }
    cb(null, decoded);
  });
};

const authCheck = (request, cb) => {
  if (!request.headers.cookie) {
    return cb(new TypeError());
  }

  const { data } = request.headers.cookie;

  if (!data) {
    return cb(new TypeError());
  }
  getTokenData(data, (err, decoded) => {
    if (err) {
      return cb(new TypeError());
    }
    cb(null, decoded);
  });
};

module.exports = { createCookie, getTokenData, authCheck };