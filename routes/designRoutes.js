const express = require("express");
const { createDesign,getDesignById, searchDesigns } = require("../controllers/designController");

const router = express.Router();

router.post("/",createDesign)
// Endpoint to fetch a design by ID
router.get("/:id", getDesignById);

// Endpoint to search designs
router.get("/", searchDesigns);

module.exports = router;
