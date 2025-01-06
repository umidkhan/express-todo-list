const express = require("express");
const todoRoutes = require("./routes/todoRoutes");
const router = express.Router();

router.use("/todos", todoRoutes);

module.exports = router;
