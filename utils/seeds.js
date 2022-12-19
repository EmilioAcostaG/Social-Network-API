const connection = require('../config/connection');
const { User, Thoughts } = require('../models');
const { userSeeds, thoughtSeeds } = require('./data')


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // drop existing user
  await User.deleteMany({});
  await Thoughts.deleteMany({});

  const users = userSeeds
  const thoughts = thoughtSeeds

  await User.collection.insertMany(users);
  await Thoughts.collection.insertMany(thoughts);

  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);

})