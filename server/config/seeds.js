const db = require('./connection');
const { User, Staff , Services } = require('../models');
const cleanDB = require('./cleanDB');


db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Staff', 'staff');
  await cleanDB('Services', 'services');
  await cleanDB('Booking, booking');

const users = await User.insertMany([
  {firstName: 'Michael', lastName:'Davidson', email:'md1232example.com', password:'abc123'},
  {firstName: 'Anna', lastName:'Cormier', email:'ac1232example.com', password:'abc123'},
])

const services = await Services.insertMany([
  { serviceName: 'Manicure', servicePrice: 25.99, addOns: [{ addOnName: 'Nail Art', addOnPrice: 5.99 }, { addOnName: 'Cuticle Treatment', addOnPrice: 3.99 }] },
  { serviceName: 'Pedicure', servicePrice: 35.99, addOns: [{ addOnName: 'Foot Massage', addOnPrice: 8.99 }, { addOnName: 'Callus Removal', addOnPrice: 4.99 }] },
  { serviceName: 'Massage', servicePrice: 45.99, addOns: [{ addOnName: 'Aromatherapy', addOnPrice: 7.99 }, { addOnName: 'Hot Stones', addOnPrice: 9.99 }] },
  { serviceName: 'Facial', servicePrice: 55.99, addOns: [{ addOnName: 'Exfoliation', addOnPrice: 6.99 }, { addOnName: 'Mask', addOnPrice: 5.99 }] },
  { serviceName: 'Yoga', servicePrice: 30.00}
])


const staff = await Staff.insertMany([
  { firstName: 'Michael', lastName: 'Brown', services: services.find(service => service.serviceName === 'Manicure')._id },
  { firstName: 'Jessica', lastName: 'Davis', services: services.find(service => service.serviceName === 'Yoga')._id },
  { firstName: 'Christopher', lastName: 'Wilson', services: services.find(service => service.serviceName === 'Massage')._id },
  { firstName: 'Emily', lastName: 'Jones', services: services.find(service => service.serviceName === 'Facial')._id },
  { firstName: 'Daniel', lastName: 'Taylor', services: services.find(service => service.serviceName === 'Manicure')._id },
  { firstName: 'Sophia', lastName: 'Miller', services: services.find(service => service.serviceName === 'Massage')._id },
  { firstName: 'Andrew', lastName: 'Anderson', services: services.find(service => service.serviceName === 'Facial')._id },
  { firstName: 'Olivia', lastName: 'Moore', services: services.find(service => service.serviceName === 'Pedicure')._id },
])




 

  console.log('users seeded');

  process.exit();
});





