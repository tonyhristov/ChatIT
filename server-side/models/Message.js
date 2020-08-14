const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const MessagesSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },

    author: {
      type: ObjectId,
      ref: "User",
    },
    chat: {
      type: ObjectId,
      ref: "Chat",
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = new Model("Message", MessagesSchema);
