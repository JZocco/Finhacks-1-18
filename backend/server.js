require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 5001; // Change 5000 to 5001 or any other unused port

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Register a user
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into the database
    const query = `INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)`;
    db.run(query, [username, email, hashedPassword], function (err) {
      if (err) {
        console.error(err.message);
        return res.status(400).json({ error: "User already exists or invalid data." });
      }
      res.status(201).json({ userId: this.lastID });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error registering user." });
  }
});

// Login a user
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const query = `SELECT * FROM users WHERE email = ?`;
    db.get(query, [email], async (err, user) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Database error." });
      }
      if (!user) {
        return res.status(401).json({ error: "Invalid email or password." });
      }

      // Compare passwords
      const isValid = await bcrypt.compare(password, user.password_hash);
      if (!isValid) {
        return res.status(401).json({ error: "Invalid email or password." });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.status(200).json({ message: "Login successful", token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error logging in user." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});