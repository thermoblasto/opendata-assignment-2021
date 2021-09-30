const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

//conect database
connectDB();

app.get('/', (req, res) => res.send('API is Running'));

//Define route
app.use('/api/data', require('./routes/data'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));