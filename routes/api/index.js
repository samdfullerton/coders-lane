const router = require("express").Router();
const peopleListRoutes = require("./peopleList");

// Book routes
router.use("/peoplelist", peopleListRoutes);

module.exports = router;