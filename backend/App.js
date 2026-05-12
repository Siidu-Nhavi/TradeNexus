const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 5001;
const url = process.env.MONGO_URL;

const allowedOrigins = [
    process.env.FRONTEND_URL,
    process.env.DASHBOARD_URL,
    'http://localhost:5173',
    'http://localhost:5174',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:5174',
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
}));
app.use(express.json());

// Mount authentication routes
app.use('/api/auth', authRoutes);

// Mount data routes
const dataRoutes = require('./routes/dataRoutes');
app.use('/api', dataRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the TradeNexus API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(url).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Failed to connect to MongoDB:', err);
    });

});


