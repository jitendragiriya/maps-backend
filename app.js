if (process.env.NODE_ENV !== "production") require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors"); 
const locationRoutes = require("./routes/locationRoutes");
app.use(express.json());

app.use(
  cors({
    origin: [
      `${process.env.DEVELOPMENT_CORS}`,
      `${process.env.PRODUCTION_CORS}`,
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Example route to query the database
app.use("/api/locations", locationRoutes);

module.exports = app;
