// profileschema goes here
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
 
});

module.exports = mongoose.model('profile', ProfileSchema);
