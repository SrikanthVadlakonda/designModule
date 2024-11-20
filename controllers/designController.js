const Design = require("../models/Design");

// Create a new design
const createDesign = async (req, res) => {
  try {
    const { artist_id, style_id, name, image, price } = req.body;

    if (!artist_id || !style_id || !name || !image || !price) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newDesign = new Design({
      artist_id,
      style_id,
      name,
      image,
      price,
    });

    const savedDesign = await newDesign.save();
    res.status(201).json(savedDesign);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific design by ID
const getDesignById = async (req, res) => {
  try {
    const design = await Design.findOne({ design_id: req.params.id });

    if (!design) {
      return res.status(404).json({ message: "Design not found" });
    }

    res.json(design);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search designs with filtering and pagination
const searchDesigns = async (req, res) => {
  try {
    const { search = "", limit = 10, offset = 0 } = req.query;

    const filter = {
      $or: [
        { name: { $regex: search, $options: "i" } }, // Case-insensitive search
      ],
    };

    const designs = await Design.find(filter)
      .skip(parseInt(offset))
      .limit(parseInt(limit));

    res.json(designs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createDesign, getDesignById, searchDesigns };
