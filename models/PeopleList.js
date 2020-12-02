const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const peopleListSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String },
  language: { type: Array, required: true },
  date: { type: Date, default: Date.now },
});

const PeopleList = mongoose.model("PeopleList", peopleListSchema);

module.exports = PeopleList;
