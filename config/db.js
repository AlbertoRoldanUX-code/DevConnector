const mongoose = require('mongoose');
// const config = require('config');
require('dotenv').config();

const mongoURI = `mongodb+srv://alberto123:${process.env.PASSWORD}@devconnector.dfiu2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
