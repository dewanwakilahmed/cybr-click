const express = require("express");
const connectDB = require("./config/db");

// Import Routes
const userRoute = require("./routes/api/user");
const authRoute = require("./routes/api/auth");
const profileRoute = require("./routes/api/profile");

const app = express();

// Connect to Cybr Click Database
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) =>
  res.send("Cybr Click App API is running and ready to process requests...")
);

// Cybr Click Server Routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/profile", profileRoute);

app.listen(PORT, () =>
  console.log(`Cybr Click App server is running on port ${PORT}...`)
);
