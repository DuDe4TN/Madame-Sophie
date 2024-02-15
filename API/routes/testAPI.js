var express = require("express");
var router = express.Router();
router.get("/", function (req, res, next) {
  res.send("API jwk BH ya Hemil");
});

module.exports = router;
