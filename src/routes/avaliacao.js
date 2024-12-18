var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

router.get("/listar", function (req, res) {
    avaliacaoController.listar(req, res);
});
router.get("/exibirGeneroPopular", function (req, res) {
    avaliacaoController.exibirGeneroPopular(req, res);
});
router.get("/exibirGeneroMenosPopular", function (req, res) {
    avaliacaoController.exibirGeneroMenosPopular(req, res);
});

router.get("/exibirQtdAvaliacoes", function (req, res) {
    avaliacaoController.exibirQtdAvaliacoes(req, res);
});

router.get("/exibirMediaNotas", function (req, res) {
    avaliacaoController.exibirMediaNotas(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avaliacaoController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    avaliacaoController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    avaliacaoController.deletar(req, res);
});

module.exports = router;