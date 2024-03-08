const mongoose = require('mongoose');
const User = require('./models/User');
const Staff = require('./models/Staff');
const Service = require('./models/Service');
const Addon = require('./models/Addon');
const Booking = require('./models/Booking');

mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userData = [
  {
    firstName: 'John',
    lastName: 'Smith',
    birthday: new Date('1990-01-01'),
    email: 'john@example.com',
    password: 'password123',
    bookings: [
      { date: { date: new Date('2024-03-07'), time: '12:00 PM' }, services: [], staff: null },
      { date: { date: new Date('2024-03-08'), time: '2:30 PM' }, services: [], staff: null },
     
    ],
  },
  {
    firstName: 'Emma',
    lastName: 'Johnson',
    birthday: new Date('1985-05-15'),
    email: 'emma@example.com',
    password: 'password456',
    bookings: [
      { date: { date: new Date('2024-03-09'), time: '3:45 PM' }, services: [], staff: null },
      { date: { date: new Date('2024-03-10'), time: '11:00 AM' }, services: [], staff: null },
     
    ],
  },
 
];

const staffData = [
  { firstName: 'Michael', lastName: 'Brown', services: 'Manicure' },
  { firstName: 'Jessica', lastName: 'Davis', services: 'Yoga' },
  { firstName: 'Christopher', lastName: 'Wilson', services: 'Massage' },
  { firstName: 'Emily', lastName: 'Jones', services: 'Facial' },
  { firstName: 'Daniel', lastName: 'Taylor', services: 'Manicure' },
  { firstName: 'Sophia', lastName: 'Miller', services: 'Massage' },
  { firstName: 'Andrew', lastName: 'Anderson', services: 'Facial' },
  { firstName: 'Olivia', lastName: 'Moore', services: 'Pedicure' },
  
];

const serviceData = [
  { serviceName: 'Manicure', servicePrice: 25.99, addons: [{ addonName: 'Nail Art', addonPrice: 5.99 }, { addonName: 'Cuticle Treatment', addonPrice: 3.99 }] },
  { serviceName: 'Pedicure', servicePrice: 35.99, addons: [{ addonName: 'Foot Massage', addonPrice: 8.99 }, { addonName: 'Callus Removal', addonPrice: 4.99 }] },
  { serviceName: 'Massage', servicePrice: 45.99, addons: [{ addonName: 'Aromatherapy', addonPrice: 7.99 }, { addonName: 'Hot Stones', addonPrice: 9.99 }] },
  { serviceName: 'Facial', servicePrice: 55.99, addons: [{ addonName: 'Exfoliation', addonPrice: 6.99 }, { addonName: 'Mask', addonPrice: 5.99 }] },
  { serviceName: 'Yoga', servicePrice: 30.00}
  
];

async function seedUsers() {
  try {
    await User.deleteMany({});
    await User.create(userData);
    console.log('User seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding user data:', error);
  }
}

async function seedStaff() {
  try {
    await Staff.deleteMany({});
    await Staff.create(staffData);
    console.log('Staff seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding staff data:', error);
  }
}

async function seedServicesAndAddons() {
  try {
    await Service.deleteMany({});
    await Addon.deleteMany({});
    const services = await Service.create(serviceData);

    console.log('Service seed data inserted successfully.');
    return services;
  } catch (error) {
    console.error('Error seeding service data:', error);
  }
}

async function seedBookings(users, staff, services) {
  try {
    await Booking.deleteMany({});

    users.forEach(async (user, index) => {
      const bookings = user.bookings.map((booking) => {
        return {
          user: user._id,
          staff: staff[index % staff.length]._id,
          services: [services[index % services.length]._id],
          date: booking.date,
        };
      });

      await Booking.create(bookings);
    });

    console.log('Booking seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding booking data:', error);
  } finally {
    mongoose.disconnect();
  }
}

async function seedData() {
  await seedUsers();
  await seedStaff();
  const services = await seedServicesAndAddons();
  await seedBookings(userData, staffData, services);
}

seedData();





