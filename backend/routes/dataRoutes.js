const express = require('express');
const router = express.Router();
const { HoldingsModel } = require('../model/HoldingsModel');
const { PositionsModel } = require('../model/PositionsModel');
const { OrderModel } = require('../model/OrderModel');
const { authenticateToken } = require('../middleware/auth');

// Get all holdings
router.get('/allHoldings', async (req, res) => {
    try {
        let allHoldings = await HoldingsModel.find({});
        res.json(allHoldings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching holdings', error: error.message });
    }
});

// Get all positions
router.get('/allPositions', async (req, res) => {
    try {
        let allPositions = await PositionsModel.find({});
        res.json(allPositions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching positions', error: error.message });
    }
});

// Get all orders
router.get('/allOrders', async (req, res) => {
    try {
        let allOrders = await OrderModel.find({});
        res.json(allOrders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error: error.message });
    }
});

// Create new order (Protected route - requires authentication)
router.post('/newOrder', authenticateToken, async (req, res) => {
    try {
        const { name, qty, price, mode } = req.body;

        if (!name || !qty || !price || !mode) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        let newOrder = new OrderModel({
            name,
            qty,
            price,
            mode
        });

        await newOrder.save();
        res.json({ success: true, message: "order saved", order: newOrder });
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
});

module.exports = router;
