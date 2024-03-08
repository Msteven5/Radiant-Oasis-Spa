const { signToken, AuthenticationError } = require('../utils/auth');
const { User, Staff, Service, Booking } = require('../models');

const resolvers = {
  Query: {
    getUser: async (_, { userId }) => {
      try {
        const user = await User.findById(userId);
        if (!user) {
          throw new Error('User not found');
        }
        return user;
      } catch (error) {
        throw new Error('Failed to fetch user');
      }
    },
    getStaff: async () => {
      try {
        return await Staff.find();
      } catch (error) {
        throw new Error('Failed to fetch staff');
      }
    },
    getServices: async () => {
      try {
        return await Service.find();
      } catch (error) {
        throw new Error('Failed to fetch services');
      }
    },
    getBookings: async () => {
      try {
        return await Booking.find();
      } catch (error) {
        throw new Error('Failed to fetch bookings');
      }
    },
  },
  Mutation: {
    createUser: async (_, args) => {
      try {
        const newUser = await User.create(args);
        return newUser;
      } catch (error) {
        throw new Error('Failed to create user');
      }
    },
    createBooking: async (_, { userId, services, staffId, date, time }) => {
      try {
        
      } catch (error) {
        throw new Error('Failed to create booking');
      }
    },
    login: async (_, { email, password }) => {
      try {
        
      } catch (error) {
        throw new AuthenticationError('Login failed');
      }
    },
  },
};

module.exports = resolvers;
