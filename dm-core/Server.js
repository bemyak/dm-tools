// Better local requires
require('app-module-path').addPath(__dirname + '/src');

global.R = require('ramda');
global.Config = require(`./configurations/local.json`);
global.Dir = __dirname;

const Express = require('express');
const App = Express();

const BodyParser = require('body-parser');
App.use(BodyParser.json());

App.use('files', Express.static('files'));

const Cors = require('cors');
App.use(Cors());

App.use(require('middleware/Authentication')());

require('helpers/RouteHelper')(App);

App.listen(Config.port, () => console.log(`Started REMUZ Repository on port ${Config.port}...`));
