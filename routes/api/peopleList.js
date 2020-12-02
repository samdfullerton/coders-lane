const router = require("express").Router();
const peopleListController = require("../../controllers/peoplelistController");

// Matches with "/api/peoplelist"
router.route("/")
  .get(peopleListController.findAll)
  .post(peopleListController.create);


module.exports = router;