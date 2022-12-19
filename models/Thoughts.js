const { Schema, model, Types } = require('mongoose');
const reactionSchema = require('./Reaction')


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]    
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
    id: false,
  }
);

const Thoughts = model('Thoughts', thoughtSchema)

module.exports = Thoughts;