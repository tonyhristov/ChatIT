const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const ChatsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    author: {
      type: ObjectId,
      ref: "User",
    },
    participants: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = new Model("Chat", ChatsSchema);
