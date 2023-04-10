const express = require("express");
const router = express.Router();
const saveResumeController = require("../../controllers/saveResumeController");
const verifyJWT = require("../../middleware/verifyJWT");

router
  .route("/")
  .post(verifyJWT, saveResumeController.handleSaveNewResume)
  .put(verifyJWT, saveResumeController.handleModifyResume);

module.exports = router;
