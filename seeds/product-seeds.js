const { Product } = require('../models');

const productData = [
  {
    product_name: 'T shirt round neck',
    price: 20.00,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: 'Boots',
    price: 120.00,
    stock: 20,
    category_id: 5,
  },
  {
    product_name: 'Leather Gloves',
    price: 30.00,
    stock: 10,
    category_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

