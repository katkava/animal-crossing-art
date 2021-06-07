const express = require("express");
const router = express.Router();
const paintingsController = require("../controllers/paintings");

router.get("/:id", paintingsController.getPainting);


module.exports = router;
