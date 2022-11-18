const {ObjectId} = require('mongoose').Types;
const { User, Thoughts} = require('../models');

// get a total of users

// get a total of users friends
const totalFriends = async () =>
  friendCount.aggregate()
  .count('friendCount')
  .then((numberOfFriends) => numberOfFriends)

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = {
          users,
          h
        }
      })
  }
}