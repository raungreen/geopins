const {
  AuthenticationError
} = require('apollo-server');
const Pin = require('./models/Pin')

const authenticated = next => (root, args, ctx, info) => {
  if (!ctx.currentUser) {
    throw new AuthenticationError('You must be logged in');
  }
  return next(root, args, ctx, info);
};

module.exports = {
  Query: {
    me: authenticated((root, args, ctx) => ctx.currentUser)
  },
  Mutatation: {
    createPin: (root, args, ctx) => {
      await new Pin({
        ...args.input
      })
    }
  }
};