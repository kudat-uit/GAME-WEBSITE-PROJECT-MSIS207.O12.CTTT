const userController = require("../controller/UserController");

const routes = require("express").Router();

routes.post("/register", userController.registerUser);
routes.post("/login", userController.loginUser);

module.exports = routes;