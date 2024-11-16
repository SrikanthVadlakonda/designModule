const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

const connectDB = async () => {
  try {
    // Fetch MongoDB connection URI from .env file
    const dbURI = process.env.MONGO_URI;

    if (!dbURI) {
      throw new Error("MONGO_URI is not defined in the .env file");
    }

    // Connect to MongoDB
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,  
    });

    console.log("MongoDB Connected Successfully!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = { connectDB };
