const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_HOST || 'muhammadshehu',
  host: process.env.DB_USER || 'localhost',
  password: process.env.DB_PASS,
  database: 'bookings'
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});


module.exports = {
  getAccommodation : async (id) => {
    const client = await pool.connect()
    try {
      const res = await client.query('SELECT * FROM accommodation WHERE id = $1', [id])
      return (res.rows[0])
    } catch(e) {
      throw e;
    } finally {
      client.release();
    } 
  },

  getReservation : async (id, start, end) => {
    const client = await pool.connect()
    try {
      const res = await client.query(`SELECT reservations.date FROM reservations WHERE reservations.accommodation_id=$1 
      and reservations.date BETWEEN CAST($2 AS DATE) AND CAST($3 AS DATE);`, [id, start, end])
      return (res.rows[0]);
    } catch(e) {
      throw e;
    } finally {
      client.release();
    }
  }
}
