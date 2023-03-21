const { Book } = require('../models');

const resolvers = {
  Query: {
    books: async () => {
      return Book.find();
    },


  },

  // Mutation: {
  //   addProfile: async (parent, { name }) => {
  //     return Profile.create({ name });
  //   },
  //   addSkill: async (parent, { profileId, skill }) => {
  //     return Profile.findOneAndUpdate(
  //       { _id: profileId },
  //       {
  //         $addToSet: { skills: skill },
  //       },
  //       {
  //         new: true,
  //         runValidators: true,
  //       }
  //     );
  //   },
  //   removeProfile: async (parent, { profileId }) => {
  //     return Profile.findOneAndDelete({ _id: profileId });
  //   },
  //   removeSkill: async (parent, { profileId, skill }) => {
  //     return Profile.findOneAndUpdate(
  //       { _id: profileId },
  //       { $pull: { skills: skill } },
  //       { new: true }
  //     );
  //   },
  // },
};

module.exports = resolvers;
