const express = require("express");
const { CreateJobPost, GetAllJobPost, UpdateJobPost, DeleteJobPost } = require("./jobs.controllers");

const router = express.Router();

router.post("/create-job", CreateJobPost);
router.get("/get-all", GetAllJobPost);
router.get("/get/:id", GetAllJobPost);
router.put("/update/:id", UpdateJobPost);
router.delete("/delete/:id", DeleteJobPost);

module.exports = router