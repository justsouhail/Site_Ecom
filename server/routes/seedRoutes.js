const express = require('express');
const data  = require('../data');
const Product = require('../models/product.js');

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
    await Product.deleteMany({}, { maxTimeMS: 30000 }); // increase timeout to 30 seconds
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  });

module.exports=seedRouter;
