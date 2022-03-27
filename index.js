const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();

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

// Serve on Home Root
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client-web-app/build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "./", "client-web-app", "build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) =>
    res.send("CYBR CLICK API is running and is ready to process requests.")
  );
}

// CYBR CLICK Server Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/blog", blogRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`CYBR CLICK App server is running on port ${PORT}...`)
);
