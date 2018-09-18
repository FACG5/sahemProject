const emailValidator = require('email-validator');
const validator = require('validator');

function validateForm(data, cb) {
  if (data) {
    if (data.name === '' || data.name.length > 20 || data.name.length < 2) {
      cb(false, 'Must Your Name length Between 2 to 20 Characters');
    } else if (!emailValidator.validate(data.email)) {
      cb(false, 'This Email is not valid');
    } else if (data.pass.length > 15 || data.pass.length < 5) {
      cb(false, 'password length must between 8 to 15 Characters');
    } else if (!validator.isURL(data.linkedin)) {
      cb(false, 'Linkedin Url is not Valid');
    } else if (!validator.isURL(data.facebook)) {
      cb(false, 'FaceBook Url is not Valid');
    } else if (!validator.isMobilePhone(data.mobile)) {
      cb(false, 'Error in Phone Number');
    } else if (validator.isEmpty(data.location) || validator.isEmpty(data.spec) || validator.isEmpty(data.description)) {
      cb(false, 'All Input Fields are Requird');
    } else if (data.description.length <= 70) {
      cb(false, 'Description Must be 70 letters Minimum');
    } else {
      cb(true);
    }
  } else {
    cb(false, 'Error');
  }
}

module.exports = validateForm;
