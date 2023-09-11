const { Client } = require("pg");

// Create a new PostgreSQL client
const client = new Client({
  connectionString: `${process.env.DATABASE_URL}`,
});

// Connect to the database
client
  .connect()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

module.exports = {
  query: (text, params) => client.query(text, params),
};
