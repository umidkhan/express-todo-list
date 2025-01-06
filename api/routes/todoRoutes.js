const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();

router.route("/").post(todoController.create);
router.route("/").get(todoController.getAll);
router.route("/:id").get(todoController.getOne);
router.route("/:id").put(todoController.update);
router.route("/:id").delete(todoController.remove);

module.exports = router;