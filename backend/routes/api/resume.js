const express = require("express");
const router = express.Router();
const resumeController = require("../../controllers/resumeController");
const verifyJWT = require("../../middleware/verifyJWT");

router
  .route("/")
  .post(verifyJWT, resumeController.handleSaveNewResume)
  .put(verifyJWT, resumeController.handleModifyResume);

module.exports = router;
