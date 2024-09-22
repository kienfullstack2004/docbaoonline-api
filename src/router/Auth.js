const express =  require("express");
const route = express.Router();

const Auth = require("../controllers/AuthController")

route.get('/roles',Auth.getAllRoles);

module.exports = route;