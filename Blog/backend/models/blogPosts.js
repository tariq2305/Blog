const mongoose = require("mongoose");

const fcschema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  sub_heading: {
    type: String,
    required: true,
  },
  body: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Blog", fcschema);
