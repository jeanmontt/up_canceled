const express = require('express');
const routes = express.Router();


routes.get("/", function (req, res) {
    return res.render("index")
});

routes.get("/o-que-fazemos", function (req, res) {
    return res.render("we-do")
});

routes.get("/up-compartilha", function (req, res) {
    return res.render("up-shares")
});

routes.get("/up-se", function (req, res) {
    return res.render("up-se")
});

routes.get("/vem-dar-um-up", function (req, res) {
    return res.render("come-up")
});

module.exports = routes;