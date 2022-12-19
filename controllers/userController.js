const { ObjectId } = require('mongoose').Types;
const { User, Thoughts } = require('../models');

// get a total of users friends
// const totalFriends = async () =>
//   friendCount.aggregate()
//   .count('friendCount')
//   .then((numberOfFriends) => numberOfFriends)

// get a total of users
// const totalUsers = async (userId) =>
//   User.aggregate([
//     { $match: { _id: ObjectId(userId) }},
//     { $unwind: '$thoughts',},
//     { $group: {
//       _id: ObjectId(userId),
//       reactionCount: { $sum: '$thoughts.reactions.length'}
//     }}
//   ])

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  
  // Get single user
  getSingleUser(req, res) {
    User.findOne({_id: req.params._id})
    .select('-__v')
    .populate('friends')
    .populate('thoughts')
    .then(async (user) =>
      !user
        ? res.status(404).json({ message: 'No user with that ID' })
        : res.json({
          user,
        })
    )
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
  },
  
  // Create a new user
  createUser(req, res) {
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
  },

  // Update user by id
  updateUser(req, res) {
    User.findOneAndUpdate(
      {_id: req.params.userId },
      { $set: req.body }
    )
    .then((user) =>
    !user
      ? res.status(404)
      .json({ message: 'No user found with that ID'})
      : res.json(user)
    )
    .catch((err) => {
      caonsole.log(err),
      res.status(500).json(err)
    });
  },

  // Delete User
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId})
      .then((user) =>
      !user
        ? res.status(404).json({ message: 'No such user exists'})
        : Thoughts.deleteMany({ _id: { $in: user.thoughts } })
        .catch((err => res.status(500).json(err))));
  },

  // Add friend
  addFriend(req, res) {
    console.log('You are adding a friend!')
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId} },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
            .status(404)
            .json({ message: 'No user found with that ID'})
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err))
  },

  // Remove friend
  removeFriend(req, res) {
    console.log('You are removing a friend')
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
            .status(404)
            .json({ message: 'No user found with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  }
 }