const express = require("express");
const { addLocation, getDefaultLocation } = require("../controllers/locationController");
// Import the controller

const router = express.Router();

// Endpoint to insert latitude and longitude data into the database
router.post("/add", addLocation);
router.get("/get/default", getDefaultLocation);

module.exports = router;
