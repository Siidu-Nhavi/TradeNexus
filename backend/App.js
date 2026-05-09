const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5001;
const url = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the TradeNexus API!');
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(url);
    console.log('Connected to MongoDB');

});


