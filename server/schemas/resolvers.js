const { signToken, AuthenticationError, UserInputError } = require('../utils/auth');
const { User, Staff, Services, Booking } = require('../models');

const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      try {
        const user = await User.findById(id);
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
        return await Staff.find().populate('services');
      } catch (error) {
        throw new Error('Failed to fetch staff');
      }
    },
    getServices: async () => {
      try {
        return await Services.find();
      } catch (error) {
        throw new Error('Failed to fetch services');
      }
    },
    getUserBookings: async (parent, args, context, info) => {
      try {
        // Extract the user ID from the args parameter
        const userId = args.userId;
    
        // Check if the user ID is provided
        if (!userId) {
          throw new UserInputError('User ID is required');
        }
    
        // Fetch the user's bookings using the provided user ID
        const user = await User.findById(userId).populate({
          path: 'bookings',
          populate: [
            { path: 'service', select: ['serviceName', 'servicePrice'] },
            { path: 'staff', select: ['firstName', 'lastName'] },
          ],
        });
    
        return user.bookings;
      } catch (error) {
        console.error('Failed to fetch bookings:', error);
        throw new Error('Failed to fetch bookings');
      }
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    createBooking: async (_, { userId, services, staffId, date, time }) => {
      try {
        const serviceObjects = [];
        for (const serviceData of services) {
          const { _id, addOns } = serviceData;
          
          const service = await Services.findById(_id);
          if (!service) {
            throw new Error(`Service not found`);
          }
          if (addOns && addOns.length > 0) {
            service.addons.push(...addOns);
          }
          serviceObjects.push(service._id);
        } 
       
        const newBooking = await Booking.create({
          user: userId,
          service: serviceObjects,
          staff: staffId,
          date,
          time
        });

        return await newBooking.populate("service");
      } catch (error) {
        console.log(error)
        throw new Error('Failure to create booking');
      }
    },

    loginUser: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('User not found');
        }
        
        if (password !== user.password) {
          throw new Error('Incorrect password');
        }
        // JWT token
        const token = signToken({ userId: user._id }); 
        return { token, user };
      } catch (error) {
        throw new AuthenticationError('Login failed'); 
      }
    },
  },
};

module.exports = resolvers;

