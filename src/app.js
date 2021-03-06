const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const { authCheck } = require('./utillity/authentication');

const controllers = require('./controllers/index');
const helpers = require('./views/helpers/index');

const upload = multer();
const app = express();

app.set('port', process.env.PORT || 4000);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(compression());
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');
app.use(cookieParser());
app.use(upload.single('imageURL'));
app.use((req, res, next) => {
  authCheck(req, (authErr, token) => {
    if (authErr) {
      req.token = null;
      req.userauthed = false;
      next();
    } else {
      req.token = token;
      req.userauthed = true;
      next();
    }
  });
});

app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers,
  }),
);

app.use(controllers);
module.exports = app;
