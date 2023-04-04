
const fs = require('fs');

const pdfFile = fs.readFileSync('../test.pdf');

const data = {
products: [
{
id: 1,
name: 'Watches 1',
category: 'Watches',
image: "/photos/item-1.png", // 679px × 829px
price: 150,
countInStock: 8,
brand: 'Brand 1',
rating: 3.5,
numReviews: 12,
description: 'This is a high quality watch',
pdf: {
      data: pdfFile,
      contentType: 'application/pdf'
    }
},
{
id: 2,
name: 'Watches 2',
category: 'Watches',
image: "/photos/item-1.png", // 679px × 829px
price: 250,
countInStock: 5,
brand: 'Brand 2',
rating: 4.0,
numReviews: 15,
description: 'This is a premium quality watch',
pdf: {
      data: pdfFile,
      contentType: 'application/pdf'
    }
},
{
id: 3,
name: 'Watches 3',
category: 'Watches',
image: "/photos/item-1.png", // 679px × 829px
price: 180,
countInStock: 12,
brand: 'Brand 3',
rating: 4.5,
numReviews: 8,
description: 'This is a high end watch',
pdf: {
      data: pdfFile,
      contentType: 'application/pdf'
    }
},
{
id: 4,
name: 'Watches 4',
category: 'Watches',
image: "/photos/item-1.png", // 679px × 829px
price: 300,
countInStock: 3,
brand: 'Brand 4',
rating: 4.8,
numReviews: 20,
description: 'This is a luxury watch',
pdf: {
      data: pdfFile,
      contentType: 'application/pdf'
    }
},
{
id: 5,
name: 'Watches 5',
category: 'Watches',
image: "/photos/item-1.png", // 679px × 829px
price: 80,
countInStock: 20,
brand: 'Brand 5',
rating: 3.2,
numReviews: 5,
description: 'This is an affordable watch',
pdf: {
      data: pdfFile,
      contentType: 'application/pdf'
    }
},
{
id: 6,
name: 'Watches 6',
category: 'Watches',
image: "/photos/item-1.png", // 679px × 829px
price: 200,
countInStock: 7,
brand: 'Brand 6',
rating: 4.3,
numReviews: 10,
description: 'This is a trendy watch',
pdf: {
      data: pdfFile,
      contentType: 'application/pdf'
    }
},
{
id: 7,
name: 'Watches 7',
category: 'Watches',
image: "/photos/item-1.png", // 679px × 829px
price: 100,
countInStock: 15,
brand: 'Brand 7',
rating: 3.9,
numReviews: 13,
description: 'This is a sporty watch',
pdf: {
      data: pdfFile,
      contentType: 'application/pdf'
    }
},

  ],
};
module.exports = data;
