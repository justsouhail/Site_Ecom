const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Product = require('./models/product');
const seedRouter = require('./routes/seedRoutes.js');
const productRouter = require('./routes/productroutes');
const Usermodel = require('./models/user');
const { generateToken } = require('./routes/utils');
const pdf = require('html-pdf');
const pdfTemplate = require('./documents');
const Productmodel = require('./models/product');

app.use(cors());
app.use(express.json());
const fs = require('fs');

const pdfFile = fs.readFileSync('../test.pdf');

mongoose.connect('mongodb://127.0.0.1:27017/ecom', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);


app.post("/adduser", async (req, res) => {
  const nom = req.body.nom;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;
  const userinstance = new Usermodel({
    nom: nom,
    email: email,
    password: password,
    role: role
  });
  console.log(userinstance.nom);
  const newuser = await userinstance.save();
  res.json(newuser);
});



app.post("/loguser", async (req, res) => {
  const { email, password } = req.body;
  console.log(password);
  const user = await Usermodel.findOne({ email, password });
  if (user) {
    res.send({
      message: 'Login successful',
      user: user,
      token: generateToken(user),
    });
    console.log('succes')
  } else {
    res.status(401).send({ message: 'Invalid email or password' });
  }

});

app.get('/products/count', async (req, res) => {
  try {
    const count = await Productmodel.countDocuments();
    res.send({ count });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Server Error' });
  }
});



app.post('/addproduit', async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const brand = req.body.brand;

  const category = req.body.category;

  const description = req.body.description;
  const price = req.body.price;
  const countInStock = req.body.countInStock;
  const rating = req.body.rating;
  const pdf = req.body.pdf;
  const Productinstance = new Productmodel({
    id: id,
    name: name,
    image: '/photos/photo4jpeg.jpg',
    brand: brand,
    category: category,
    description: description,
    price: price,
    countInStock: countInStock,
    rating: 0,
    numReviews: 0,
    pdf: {
      data: pdfFile,
      contentType: 'application/pdf'
    }
  });


  console.log(Productinstance.nom);
  await Productinstance.save();
  res.send('data insert')
});




app.listen(3001, () => {
  console.log('connected');
});
