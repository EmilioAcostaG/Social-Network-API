const connection = require('../config/connection');
const { userData } = require('../models');
const { userSeeds, thoughtSeeds } = require('./data')


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // drop existing user
  await userData.user.deleteMany({});
  await userData.thoughts.deleteMany({});

  const users = userSeeds
  const thoughts = thoughtSeeds

  await userData.user.collection.insertMany(users);
  await userData.thoughts.collection.insertMany(thoughts);

  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);

})