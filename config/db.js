const { Pool } = require('pg');

const pool = new Pool({
  user: `${process.env.DATABASE_USERNAME}`,
  host: `${process.env.DATABASE_HOST}`,
  database: `${process.env.DATABASE_COLLECTION}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  port: 5432, // Default PostgreSQL port
})

module.exports = {
  query: (text, params) => pool.query(text, params),
};
