const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

//conect database
connectDB();

app.get('/', (req, res) => res.send('API is Running'));

//Define route
app.use('/api/data', require('./routes/data'));

//Serve static assets in production
if(process.env.NODE_ENV==='production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
