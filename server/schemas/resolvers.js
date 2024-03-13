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
        const userId = args.userId;
    
        if (!userId) {
          throw new UserInputError('User ID is required');
        }
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
    getStaffMember: async (_, { _id }) => {
      try {
        const staff = await Staff.findById(_id).populate("services");
        if (!staff) {
          throw new Error('Employee not found');
        }
        return staff;
      } catch (error) {
        throw new Error('Failed to fetch employee');
      }
    },
    getSingleService: async (_, { _id }) => {
      try {
        const service = await Services.findById(_id).populate("addOns");
        if (!service) {
          throw new Error('Service not found');
        }
        return service;
      } catch (error) {
        throw new Error('Failed to fetch service');
      }
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    createBooking: async (_, { userId, serviceId, staffId, addOnId, phoneNumber, date, time }) => {
      try {
         const newBooking = await Booking.create({
          userId: userId,
          serviceId: serviceId,
          staffId: staffId,
          addOnId: addOnId,
          phoneNumber,
          date,
          time
        });

        return await newBooking;
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

