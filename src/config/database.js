const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://bharatkumawatk1:ggWBLYOdtFju0pS4@cluster0.6psxp.mongodb.net/devBharat"
  );
};

module.exports = connectDB;
