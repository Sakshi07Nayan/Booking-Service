import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
import { fileURLToPath } from 'url';
import path from 'path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);


const app = express();
const port = process.env.PORT || 5000;

//user the client app
app.use(express.static(path.join(_dirname,'/client/build')));
app.get('*',(req,res)=> res.sendFile(path.join(_dirname,'/client/build/index.html')))

// Database connection using environment variables
// const pool = new Pool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT || 5432,
//     database: process.env.DB_NAME
// });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false, // SSL setting for production (like Heroku)
});

// Test PostgreSQL connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log('Connection test result:', result.rows);
  });
});


app.use(cors({ origin: '*' }));
app.use(express.json());

// Endpoint to book an appointment
app.post('/appointments', async (req, res) => {
  try {
    const { name, email, date, service } = req.body;
    console.log('Received data:', { name, email, date, service }); 
    const query = 'INSERT INTO appointments (name, email, date, service) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [name, email, date, service];
    
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/get_booking', async (req, res) => {
    try {
      const query = 'SELECT * FROM appointments ORDER BY date DESC';
      const result = await pool.query(query);
      
      res.status(200).json(result.rows);
    } catch (err) {
      console.error('Error fetching bookings:', err);
      res.status(500).json({ error: 'An error occurred while fetching bookings' });
    }
});

// Add more endpoints as needed

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js API!');
});
