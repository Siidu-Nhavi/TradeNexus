const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5001;
const url = process.env.MONGO_URL;
const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the TradeNexus API!');
});

    //bring data by fetching and set it to the database

//all data from holdings is fetched and sent to the frontend
app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

//all data from positions is fetched and sent to the frontend
app.get("/allPositions", async (req,res)  =>{
    let allPositons = await PositionsModel.find({});
    res.json(allPositons);
})




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(url);
    console.log('Connected to MongoDB');

});


