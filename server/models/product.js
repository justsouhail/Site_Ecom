const mongoose  = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    id :  {type: Number},
    name: { type: String, required: true ,unique: false },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    pdf: { 
      data: Buffer, 
      contentType: String 
    }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
module.exports=Product;
