const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- Database connected -----\n');
  await seedCategories();
  console.log('\n----- Categories-----\n');

  await seedProducts();
  console.log('\n----- Products -----\n');

  await seedTags();
  console.log('\n----- Tags -----\n');

  await seedProductTags();
  console.log('\n----- Products-----\n');

  process.exit(0);
};

seedAll();
