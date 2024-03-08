// cleanDB.js
const { User, Staff, Services, Booking } = require('../models');

const cleanDB = async (modelName, collectionName) => {
  try {
    if (modelName === 'User') {
      await User.deleteMany({});
    } else if (modelName === 'Staff') {
      await Staff.deleteMany({});
    } else if (modelName === 'Services') {
      await Services.deleteMany({});
    } else if (modelName === 'Booking') {
      await Booking.deleteMany({});
    } else {
      console.error(`Unknown model: ${modelName}`);
    }
    console.log(`${collectionName} collection cleaned`);
  } catch (error) {
    console.error(`Error cleaning ${collectionName} collection:`, error);
  }
};

module.exports = cleanDB;

