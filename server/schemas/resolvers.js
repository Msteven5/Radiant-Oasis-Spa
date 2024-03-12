const { signToken, AuthenticationError } = require('../utils/auth');
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
    getBookings: async (parent, args, context, info) => {
      try {
        if(context.user){
          const user = await User.findById(context.user._id).populate("bookings")
          return user
        }
        throw AuthenticationError

      } catch (error) {
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

    login: async (_, { email, password }) => {
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
        return { token };
      } catch (error) {
        throw new AuthenticationError('Login failed'); 
      }
    },
  },
};

module.exports = resolvers;
