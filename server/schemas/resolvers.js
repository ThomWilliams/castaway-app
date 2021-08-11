const { AuthenticationError } = require("apollo-server-express");
const { User, Podcast, Genre } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // GENRE QUERY - FIND MANY
    genres: async () => {
      return Genre.find();
    },

    // GENRE QUERY - FIND ONE
    genre: async (parent, { genreId }) => {
      return Genre.findOne({ _id: genreId });
    },

    // PODCASTS QUERY - FIND BY GENRE
    podcasts: async (parent, { genre, name, id }) => {
      const params = {};

      if (genre) {
        params.genre = genre;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      if (id) {
        params.id = {
          $regex: id,
        };
      }

      return Podcast.find(params).populate("genre");
    },

    // FIND ONE PODCAST QUERY
    podcast: async (parent, { podcastId }) => {
      return Podcast.findOne({ _id: podcastId });
    },

    // RETRIEVE DATA FOR LOGGED-IN USER
    user: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  // MUTATIONS
  Mutation: {
    // ADD USER
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
     

      return { token, user };
    },

    // LOGIN USER
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const validPw = await user.isValidPassword(password);

      if (!validPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    // UPDATE USER DETAILS
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    // ADD PODCAST
    addPodcast: async (parent, { podcasts }, context) => {
      if (context.user) {
        const podcast = new Podcast({ podcasts });

        await User.findByIdAndUpdate(context.user.id, {
          $push: { podcasts: podcast },
        });

        return podcast;
      }

      throw new AuthenticationError("Not logged in");
    },

    // SAVE PODCAST
    savePodcast: async (parent, { user, podcast }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: user._id },
          { $addToSet: { savedPodcasts: podcast } },
          { new: true, runValidators: true }
        );
      }
      throw new AuthenticationError(
        "You need to be logged in to save a podcast!"
      );
    },

    // REMOVE PODCAST
    removePodcast: async (parent, { podcast, user }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: user.user._id },
          { $pull: { savedPodcasts: { podcast } } },
          { new: true }
        );
      }
      throw new AuthenticationError(
        "You need to be logged in to delete a podcast!"
      );
    },
  },
};

module.exports = resolvers;
