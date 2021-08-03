const mongoose = require("mongoose");

const { Schema } = mongoose;

const genreSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  parent_id: {
    type: Number,
  },
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;

// EXAMPLE DATA {
//         "id": 144,
//         "name": "Personal Finance",
//         "parent_id": 67
//       },
