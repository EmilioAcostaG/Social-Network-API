const { connect, connection } = require('mongoose');

// Connection string to local instance of MongoDB including database name
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/usersDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;