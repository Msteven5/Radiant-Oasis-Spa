const mongoose = require('mongoose');
const { getCurrentDate } = require('../utils/date');
const db = require('./connection');
const { User, Staff, Services, Booking, } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Staff', 'staff');
  await cleanDB('Service', 'services');
  await cleanDB('Booking', 'bookings');


  const users = await User.insertMany([
    {
      firstName: 'Michael',
      lastName: 'Davidson',
      email: 'md1232@example.com',
      password: 'abc123',
      bookings: []
    },
    {
      firstName: 'Anna',
      lastName: 'Cormier',
      email: 'ac1232@example.com',
      password: 'abc123',
      bookings: []
    }
  ]);

  const services = await Services.insertMany([
    { serviceName: 'Manicure', servicePrice: 25.99, addOns: [{ addOnName: 'Nail Art', addOnPrice: 5.99 }, { addOnName: 'Cuticle Treatment', addOnPrice: 3.99 }] },
    { serviceName: 'Pedicure', servicePrice: 35.99, addOns: [{ addOnName: 'Foot Massage', addOnPrice: 8.99 }, { addOnName: 'Callus Removal', addOnPrice: 4.99 }] },
    { serviceName: 'Massage', servicePrice: 45.99, addOns: [{ addOnName: 'Aromatherapy', addOnPrice: 7.99 }, { addOnName: 'Hot Stones', addOnPrice: 9.99 }] },
    { serviceName: 'Facial', servicePrice: 55.99, addOns: [{ addOnName: 'Exfoliation', addOnPrice: 6.99 }, { addOnName: 'Mask', addOnPrice: 5.99 }] },
    { serviceName: 'Yoga', servicePrice: 30.00 }
  ]);



  function generateAvailability(date, hours) {
    const fullDate = date;

    return hours.map(hour => ({
        fullDate: fullDate,
        hour: hour,
        available: true
    }));
}

const currentDate = getCurrentDate();

const staffData = [
    { firstName: 'Michael', lastName: 'Brown', serviceName: 'Manicure', hours: ['12:00p-1:00p', '1:00p-2:00p', '2:00p-3:00p', '3:00p-4:00p', '4:00p-5:00p'] },
    { firstName: 'Jessica', lastName: 'Davis', serviceName: 'Yoga', hours: ['8:00a-9:00a', '9:00a-10:00a', '10:00a-11:00a', '12:00p-1:00p', '1:00p-2:00p'] },
    { firstName: 'Christopher', lastName: 'Wilson', serviceName: 'Massage', hours: ['8:00a-9:00a', '9:00a-10:00a', '10:00a-11:00a', '12:00p-1:00p', '1:00p-2:00p'] },
    { firstName: 'Emily', lastName: 'Jones', serviceName: 'Facial', hours: ['12:00p-1:00p', '1:00p-2:00p', '2:00p-3:00p', '3:00p-4:00p', '4:00p-5:00p'] },
    { firstName: 'Daniel', lastName: 'Taylor', serviceName: 'Manicure', hours: ['8:00a-9:00a', '9:00a-10:00a', '10:00a-11:00a', '12:00p-1:00p', '1:00p-2:00p'] },
    { firstName: 'Sophia', lastName: 'Miller', serviceName: 'Massage', hours: ['12:00p-1:00p', '1:00p-2:00p', '2:00p-3:00p', '3:00p-4:00p', '4:00p-5:00p'] },
    { firstName: 'Andrew', lastName: 'Anderson', serviceName: 'Facial', hours: ['8:00a-9:00a', '9:00a-10:00a', '10:00a-11:00a', '12:00p-1:00p', '1:00p-2:00p'] },
    { firstName: 'Olivia', lastName: 'Moore', serviceName: 'Pedicure', hours: ['12:00p-1:00p', '1:00p-2:00p', '2:00p-3:00p', '3:00p-4:00p', '4:00p-5:00p'] }
];

const staff = await Staff.insertMany(staffData.map(staff => ({
    firstName: staff.firstName,
    lastName: staff.lastName,
    services: services.find(service => service.serviceName === staff.serviceName)._id,
    availability: generateAvailability(currentDate, staff.hours)
})));



  const michaelBookings = [
    {
      user: users[0]._id,
      service: services.find(service => service.serviceName === 'Manicure')._id,
      staff: staff.find(staff => staff.firstName === 'Michael')._id,
      date: new Date('01-19-2024'),
      time: '3:00p - 4:00p'
    },
    {
      user: users[0]._id,
      service: services.find(service => service.serviceName === 'Manicure')._id,
      staff: staff.find(staff => staff.firstName === 'Michael')._id,
      date: new Date('01-18-2024'),
      time: '2:30 PM'
    },
    {
      user: users[0]._id,
      service: services.find(service => service.serviceName === 'Manicure')._id,
      staff: staff.find(staff => staff.firstName === 'Michael')._id,
      date: new Date('01-20-2024'),
      time: '5:30 PM'
    }
  ];

  const annaBookings = [
    {
      user: users[1]._id,
      service: services.find(service => service.serviceName === 'Manicure')._id,
      staff: staff.find(staff => staff.firstName === 'Michael')._id,
      date: new Date('01-19-2024'),
      time: '3:30 PM'
    },
  
  ];

  const bookings = await Booking.insertMany([...michaelBookings, ...annaBookings]);

  for (const booking of bookings) {
    const userIndex = users.findIndex(user => user._id.toString() === booking.user.toString());
    users[userIndex].bookings.push(booking);
  }

  await Promise.all(users.map(user => user.save()));

  console.log('Data seeded successfully');
  process.exit();
});

