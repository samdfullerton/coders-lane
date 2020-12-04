const db = require("../models");

// Defining methods for the peoplelistController
module.exports = {
  findAll: function(req, res) {
    db.PeopleList
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.PeopleList
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
};
