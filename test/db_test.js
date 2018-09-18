const tape = require('tape');
const checkUser = require('../src/database/queries/checkUser');
const db_build = require('../src/database/db_build');
const getProfile = require('../src/database/queries/getProfile');
const addUser = require('../src/database/queries/addUser');

tape('Check Email Not Found', (t) => {
  db_build((err, res) => {
    checkUser('mero@mero.com', (err, res) => {
      t.equal(res.length, 0, 'it should test return 0');
      t.end();
    });
  });
});

tape('Check Email Found', (t) => {
  db_build((err, res) => {
    checkUser('marwan@marwan.com', (err, res) => {
      t.error(err, 'Not Error');
      t.equal(res.length, 1, 'it should test return 1');
      t.end();
    });
  });
});

tape('Testing The Length of Result when id found', (t) => {
  db_build((err, res) => {
    getProfile(1, (err, res) => {
      t.error(err);
      t.equal(res.length > 0, true, 'DB Should Have Rows inside');
      t.end();
    });
  });
});

tape('Testing Data When get data by id', (t) => {
  db_build((err, res) => {
    getProfile(1, (err, res) => {
      t.equal(res[0].name, 'Marwan Elkhoudary', ' Should Return Name Field');
      t.end();
    });
  });
});

tape('Testing The Length of Result when id not found', (t) => {
  db_build((err, res) => {
    getProfile(500, (err, res) => {
      t.error(err);
      t.equal(res.length === 0, true, 'DB Should Have Rows inside');
      t.end();
    });
  });
});

tape('add new user', (t) => {
  db_build((err, res) => {
    const data = {
      name: 'hosam ali',
      email: 'hosamali@hosam.com',
      hash: '$2a$10$Ipv1dgHOlQUPpmznFw3T2OFZFkRnurG.KqAfv/6hzIMnql2qKYGYm',
      location: 'Gaza',
      spec: 'Information Technology',
      occupation: 'employee',
      linkedin: 'www.google.com',
      facebook: 'www.facebook.com',
      mobile: '00972595599633',
      img: 'aaa',
      description: 'aaa aaa aaa aaa aaaa aaaa aaaa aaaaa aaaaaaa aaaaaa aaaaaa aaaaaa aaaaa aaaa aaaa',
    };
    addUser(data, (err, res) => {
      t.error(err, null);
      t.end();
    });
  });
});

tape('add new user by email exist in database', (t) => {
  db_build((err, res) => {
    const data = {
      name: 'hosam ali',
      email: 'marwan@marwan.com',
      hash: '$2a$10$Ipv1dgHOlQUPpmznFw3T2OFZFkRnurG.KqAfv/6hzIMnql2qKYGYm',
      location: 'Gaza',
      spec: 'Information Technology',
      occupation: 'employee',
      linkedin: 'www.google.com',
      facebook: 'www.facebook.com',
      mobile: '00972595599633',
      img: 'aaa',
      description: 'aaa aaa aaa aaa aaaa aaaa aaaa aaaaa aaaaaaa aaaaaa aaaaaa aaaaaa aaaaa aaaa aaaa',
    };
    addUser(data, (err, res) => {
      t.equal(err.code, '23505', 'should return error code 23505');
      t.end();
    });
  });
});

tape('add new user with out fill name field - not null', (t) => {
  db_build((err, res) => {
    const data = {

      email: 'heba@heba.com',
      hash: '$2a$10$Ipv1dgHOlQUPpmznFw3T2OFZFkRnurG.KqAfv/6hzIMnql2qKYGYm',
      location: 'Gaza',
      spec: 'Information Technology',
      occupation: 'employee',
      linkedin: 'www.google.com',
      facebook: 'www.facebook.com',
      mobile: '00972595599633',
      img: 'aaa',
      description: 'aaa aaa aaa aaa aaaa aaaa aaaa aaaaa aaaaaaa aaaaaa aaaaaa aaaaaa aaaaa aaaa aaaa',
    };
    addUser(data, (err, res) => {
      t.equal(err.code, '23502', 'should return error code 23502');
      t.end();
    });
  });
});

tape('Testing Data Type of id Field', (t) => {
  db_build((err, res) => {
    getProfile(2, (err, res) => {
      t.equal(typeof (res[0].id), 'number', 'should return number');
      t.end();
    });
  });
});

tape('Testing Data Type of location Field', (t) => {
  db_build((err, res) => {
    getProfile(2, (err, res) => {
      t.equal(typeof (res[0].location), 'string', 'should return string');
      t.end();
    });
  });
});


tape('Testing Data Type of Occupation Field', (t) => {
  db_build((err, res) => {
    getProfile(2, (err, res) => {
      t.equal(typeof (res[0].occupation), 'string', 'should return string');
      t.end();
    });
  });
});