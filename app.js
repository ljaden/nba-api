const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config({ path: "/config/.env" });

// routes
const mainRoutes = require("./routes/main");

// app
const app = express();

//middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

// routes
app.use("/api/v1", mainRoutes);
app.all("*", (req, res) => {
  res.status(404).json({ message: "Error 404 - Endpoint not found." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Listening on PORT ${PORT}`);
});
