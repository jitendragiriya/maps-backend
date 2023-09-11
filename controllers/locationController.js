const db = require("../config/db");

/**
 *
 * @param {Request} req - request getting from the users browser
 * @param {Response} res - respose return to the user according to the users request
 */
const addLocation = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;  
    const check =
      "SELECT * FROM location where latitude = $1 AND longitude = $2";
    const values = [latitude, longitude];
    const datas = await db.query(check, values);

    if (datas.rowCount > 0) {
      return res.json(datas.rows[0]);
    }

    const query =
      "INSERT INTO location (latitude, longitude) VALUES ($1, $2) RETURNING *";
    const result = await db.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller get default latitude and longitude
const getDefaultLocation = async (req, res) => {
  try {
    const check =
      "SELECT * FROM location where latitude = $1 AND longitude = $2";
    const values = [
      process.env.DEFAULT_LATITUDE,
      process.env.DEFAULT_LONGITUDE,
    ]; 
    const datas = await db.query(check, values);

    if (datas.rowCount > 0) { 
      return res.json(datas.rows[0]);
    }

    res.json({ error: "No coordinates found" });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addLocation,
  getDefaultLocation,
};
