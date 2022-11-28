const express = require("express");
const router = express.Router();

const liveData = require("../controllers/main");

router.get("/live", liveData);

module.exports = router;
