const mongoose = require("mongoose");
const validator = require('validator');

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
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error('Invalid email address: ' + value);
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    trim: true,
    validate(value){
      if(!validator.isStrongPassword(value)){
        throw new Error('Enter a strong password: ' + value);
      }
    },
  },
  age: {
    type: Number,
    min:  18,
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
    validate(value){
      if(!validator.isURL(value)){
        throw new Error('Invalid photo URL : ' + value);
      }
    },
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
