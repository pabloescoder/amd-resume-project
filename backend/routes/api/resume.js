const express = require("express");
const router = express.Router();
const resumeController = require("../../controllers/resumeController");
const verifyJWT = require("../../middleware/verifyJWT");
const isUserVerified = require("../../middleware/isUserVerified");

router
  .route("/")
  .get(verifyJWT, resumeController.handleFetchSavedResume)
  .post(verifyJWT, isUserVerified, resumeController.handleSaveNewResume)
  .put(verifyJWT, isUserVerified, resumeController.handleModifyResume);

router
  .route("/all-titles")
  .get(verifyJWT, resumeController.handleFetchAllResumeTitles);

module.exports = router;
