const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
dotenv.config();


const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 5001;

const url = process.env.MONGO_URL;

const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');

const {OrderModel} = require('./model/OrderModel');



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

//all data from orders is fetched and sent to the frontend
app.get("/allOrders", async (req,res)  =>{
    let allOrders = await OrderModel.find({});
    res.json(allOrders);
})

//inserting new order to the database
app.post('/newOrder', async (req, res) => {

    let newOrder = new OrderModel({
        name : req.body.name,
        qty : req.body.qty,
        price : req.body.price,
        mode : req.body.mode
    });

    await newOrder.save();
    res.json({ success: true, message: "order saved", order: newOrder });

});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(url);
    console.log('Connected to MongoDB');

});


