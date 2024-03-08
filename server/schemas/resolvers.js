const { signToken, AuthenticationError } = require('../utils/auth');
const { User, Staff, Services, Booking } = require('../models');

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
        return await Services.find();
      } catch (error) {
        throw new Error('Failed to fetch treatments');
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
}
//   Mutation: {
//     createUser: async (_, args) => {
//       try {
//         const newUser = await User.create(args);
//         return newUser;
//       } catch (error) {
//         throw new Error('Failed to create user');
//       }
//     },
//     createBooking: async (_, { userId, services, staffId, date, time }) => {
//       try {
//         const serviceObjects = [];
//         for (const serviceData of services) {
//           const { serviceId, addOns } = serviceData;
//           const service = await Services.findById(serviceId);
//           if (!service) {
//             throw new Error(`Service not found`);
//           }
//           if (addOns && addOns.length > 0) {
//             service.addons.push(...addOns);
//           }
//           serviceObjects.push(service);
//         }
//         const newBooking = await Booking.create({
//           user: userId,
//           services: serviceObjects,
//           staff: staffId,
//           date,
//           time
//         });
//         return newBooking;
//       } catch (error) {
//         throw new Error('Failure to create booking');
//       }
//     },

//     login: async (_, { email, password }) => {
//       try {
//         const user = await User.findOne({ email });
//         if (!user) {
//           throw new Error('User not found');
//         }
        
//         if (password !== user.password) {
//           throw new Error('Incorrect password');
//         }
//         // JWT token
//         const token = signToken({ userId: user._id }); 
//         return { token };
//       } catch (error) {
//         throw new AuthenticationError('Login failed'); 
//       }
//     },
//   },
// };

module.exports = resolvers;
