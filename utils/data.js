const userSeeds = [
  {
    username: 'Ana',
    email: 'ana@gmail.com',
    thoughts: ['Nice to Meet You!'],
    friends: ['Billy', 'Bobby', 'Joe']
  },
  {
    username: 'Billy',
    email: 'billy@hotmail.com',
    thoughts: ['I know nothing.'],
    friends: ['Ana', 'Bobby', 'Joe']
  },
  {
    username: 'Joe',
    email: 'joe@myspace.com',
    thoughts: ['I like to party.'],
    friends: ['Ana', 'Billy']
  },
  {
    username: 'Sofie',
    email: 'sofie@icloud.com',
    thoughts: ['Where is my coffee.'],
    friends: ['Ana', 'Billy', 'Joe']
  }
];

const thoughtSeeds = [
  {
    thought: 'Is the earth flat?',
    username: "Billy"
  },
  {
    thought: 'What time do we leave?',
    username: 'Sofie'
  },
  {
    thought: 'Wanna be my friend?',
    username: 'Joe'
  }
]

module.exports = ( userSeeds, thoughtSeeds)