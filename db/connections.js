// db/connection.js
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);  

mongoose.connection.once('connected', () => {
    console.log('✅ Connected to MongoDB');
});

mongoose.connection.once('error', (err) => {
    console.error('❌ MongoDB connection error:', err.message);
});
