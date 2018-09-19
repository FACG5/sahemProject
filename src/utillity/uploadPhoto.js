const request = require('request');

function uploadImg(file) {
  return new Promise((resolve, reject) => {
    const options = {
      url: 'https://api.imgur.com/3/upload',
      headers: {
        Authorization: `Client-ID ${process.env.clientID}`,
      },
    };
    const post = request.post(options, (err, req, body) => {
      if (err) {
        reject(err);
      } else {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          resolve(body);
        }
      }
    });
    const upload = post.form();
    upload.append('type', 'file');
    upload.append('image', file);
  });
}

exports.upload = uploadImg;
