const express = require("express");

// Change Default Node Config Directory
process.env["NODE_CONFIG_DIR"] = __dirname + "/src/configs";

const connectDB = require("./src/configs/db.config");

// Import Routes
const userRoutes = require("./src/routes/api/user");
const authRoutes = require("./src/routes/api/auth");
const profileRoutes = require("./src/routes/api/profile");
const blogRoutes = require("./src/routes/api/blog.routes");

const app = express();

// Connect to CYBR CLICK Database
connectDB();

// Initialize Middlewawre
app.use(express.json({ extended: false })); // Request & Body Validation

app.get("/", (req, res) =>
  res.send("CYBR CLICK App API is running and ready to process requests...")
);

// CYBR CLICK Server Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/blog", blogRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`CYBR CLICK App server is running on port ${PORT}...`)
);
