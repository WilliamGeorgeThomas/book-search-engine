const { Book, User } = require("../models");

const resolvers = {
  Query: {
    books: async () => {
      return Book.find();
    },
    users: async () => {
      return User.find();
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      return User.create({ username, email, password });
    },
  },
};

module.exports = resolvers;
