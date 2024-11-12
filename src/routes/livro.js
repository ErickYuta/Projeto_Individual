var express = require("express");
var router = express.Router();

var livroController = require("../controllers/livroController");

router.get("/:empresaId", function (req, res) {
  livroController.buscarAquariosPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  livroController.cadastrar(req, res);
})

module.exports = router;