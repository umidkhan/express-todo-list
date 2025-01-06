const TodoModel = require("../models/todoModel");
require("dotenv").config();

const create = async (req, res) => {
  try {
    const doc = await TodoModel(req.body);
    await doc.save();
    return res.status(201).json({ message: "Todo created successfully" });
  } catch (err) {
    console.log(err, "error while creating todo");
    return res.status(500).json({ message: "Server error" });
  }
};

const getAll = async (req, res) => {
  try {
    const { page, limit, orderId } = req.query;
    let data = {};
    if (orderId) {
      data["orderId"] = orderId;
    }

    if (page && limit) {
      let options = {
        page: page,
        limit: limit,
      };

      let docs = await TodoModel.paginate(data, options);
      return res.status(200).json(docs);
    } else {
      const docs = await TodoModel.find(data);
      return res.status(200).json(docs);
    }
  } catch (err) {
    console.log(err, "error while getting all todo");
    return res.status(500).json({ message: "Server error" });
  }
};

const getOne = async (req, res) => {
  try {
    const doc = await TodoModel.findById(req.params.id);
    if (!doc) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json(doc);
  } catch (err) {
    console.log(err, "error while getting a single todo");
    return res.status(500).json({ message: "Server error" });
  }
};

const update = async (req, res) => {
  try {
    const doc = await TodoModel.findByIdAndUpdate(req.params.id, req.body);

    if (!doc) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({ message: "Todo updated successfully" });
  } catch (err) {
    console.log(err, "error while updating a single todo");
    return res.status(500).json({ message: "Server error" });
  }
};

const remove = async (req, res) => {
  try {
    const doc = await TodoModel.findByIdAndDelete(req.params.id);
    if (!doc) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({ message: "Todo deleted successfully" });
  } catch (err) {
    console.log(err, "error while updating a single todo");
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  update,
  create,
  getAll,
  getOne,
  remove,
};
