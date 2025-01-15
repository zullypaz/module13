const { Tag } = require('../models');

const tagData = [
  {
    tag_name: '',
  },
  {
    tag_name: ' white',
  },
  {
    tag_name: 'pink',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'T-shirt',
  },
  {
    tag_name: 'coffee',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
