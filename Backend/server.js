const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('Error Connecting MongoDB' , err));

//Basic Route
app.get('/' , (req , res) => {
    res.send('Hello From Express');
})

const productRoutes = require('./routes/productRoutes');
app.use('/api/products' , productRoutes);

const Port = process.env.Port || 5000;
app.listen(Port , () => console.log(`Server running on port ${Port}`))




// GET http://localhost:5000/api/products
// POST http://localhost:5000/api/products
// PUT http://localhost:5000/api/products/:id
// DELETE http://localhost:5000/api/products/:id