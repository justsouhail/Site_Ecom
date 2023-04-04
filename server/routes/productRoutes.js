const express = require('express');
const data = require('../data');
const Product = require('../models/product.js');

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send({ products });
});

productRouter.get('/id/:id', async (req, res) => {
  const product = await Product.findOne({ id: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});



productRouter.get('/id/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
productRouter.get('/id/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});



module.exports = productRouter;
