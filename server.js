const express = require("express");
const { connectDB } = require("./config/db");
const designRoutes = require("./routes/designRoutes");

const app = express();
// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Register Routes
app.use("/api/designs", designRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
