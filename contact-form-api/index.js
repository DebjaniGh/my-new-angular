// Contact Form API Server
// Express server for handling contact form submissions
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS for cross-origin requests
app.use(cors());
// Parse JSON request bodies
app.use(express.json());

// GET endpoint - for testing only
app.get("/api/contact-form", (req, res) => {
  res.json({ message: "GET endpoint - use POST for form submission" });
});

// POST endpoint - handles contact form submissions
app.post("/api/contact-form", (req, res) => {
  console.log(req.body);

  // Simulate API delay (3 seconds)
  setTimeout(() => {
    // Simulate 80% success rate (random failure for testing)
    const isSuccess = Math.random() > 0.2;
    if (isSuccess) {
      res.status(200).json({ message: "Success" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }, 3000);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
