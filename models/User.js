const { Schema, model } = require('mongoose');
const { Thoughts } = require('.');
const thoughtSchema = require('./Thoughts');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please fill a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
      }
    ],
    //friends is array of _id values referencing User model (self-reference)
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ] 
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//create a virtual that retrieves the length of the user's friends array
userSchema.virtual('friendCount').get(function() {
    return this.friends.length
  })


const User = model('User', userSchema);

module.exports = User;