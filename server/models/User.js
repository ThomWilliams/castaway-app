const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import Podcast.js schema
const Podcast = require('./Podcast');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please ensure a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    // sets savedPodcasts as an array of data in line with the podcast data
    savedPodcasts: [Podcast.schema],
  },
  // sets use for virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare and validate password for logging in
userSchema.methods.isValidPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// user query also tallies podcast count 
userSchema.virtual('podcastCount').get(function () {
  return this.savedPodcasts.length;
});

const User = model('User', userSchema);

module.exports = User;
