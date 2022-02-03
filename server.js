const express = require("express");
const connectDB = require("./config/db");

// Import Routes
const userRoute = require("./routes/api/user");
const authRoute = require("./routes/api/auth");
const profileRoute = require("./routes/api/profile");

const app = express();

// Connect to CYBR CLICK Database
connectDB();

// Initialize Middlewawre
app.use(express.json({ extended: false })); // Request & Body Validation

app.get("/", (req, res) =>
  res.send("CYBR CLICK App API is running and ready to process requests...")
);

// CYBR CLICK Server Routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/profile", profileRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`CYBR CLICK App server is running on port ${PORT}...`)
);
