const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to Cybr Click Database
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) =>
  res.send("Cybr Click App API is running and ready to process requests...")
);

app.listen(PORT, () =>
  console.log(`Cybr Click App server is running on port ${PORT}...`)
);
