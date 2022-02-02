const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) =>
  res.send("Cybr Click App API is running and ready to process requests...")
);

app.listen(PORT, () =>
  console.log(`Cybr Click App server is running on port ${PORT}...`)
);
