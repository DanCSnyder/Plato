const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  // user_id should correspond with the mongodb _id of the user
  user_id: String,
  // notes should be an object (EntityMap)
  text: Object,
  // this should probably be unique for a user
  title: String
});

module.exports = mongoose.model('Note', noteSchema);
