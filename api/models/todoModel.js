const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      required: true,
      default: "not completed",
    },
    orderId: {
      type: Number,
      required: true,
      uniqe: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

todoSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("todo", todoSchema);
