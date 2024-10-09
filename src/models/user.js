const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    trim: true,

  },
  lastName: {
    type: String,
    minLength: 3,
    maxLength: 50,
    trim: true,
  },
  emailId: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    trim: true,
  },
  age: {
    type: Number,
    min:  18,
    required: true,
  },
  gender: {
    type: String,
    validate(value) {
      if(!["male", "female", "others"].includes(value)){
        throw new Error("Gender data is not valid");
      }
    },
  },
  photoUrl: {
    type: String,
    default: "https://geographyandyou.com/images/user-profile.png",
  },
  about: {
    type: String,
  },
  skills: {
    type: Array,
  }
},{
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
