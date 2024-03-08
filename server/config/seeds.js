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



// const staff = await Staff.insertMany([
//   { firstName: 'Michael', lastName: 'Brown', services: 'Manicure' },
//   { firstName: 'Jessica', lastName: 'Davis', services: 'Yoga' },
//   { firstName: 'Christopher', lastName: 'Wilson', services: 'Massage' },
//   { firstName: 'Emily', lastName: 'Jones', services: 'Facial' },
//   { firstName: 'Daniel', lastName: 'Taylor', services: 'Manicure' },
//   { firstName: 'Sophia', lastName: 'Miller', services: 'Massage' },
//   { firstName: 'Andrew', lastName: 'Anderson', services: 'Facial' },
//   { firstName: 'Olivia', lastName: 'Moore', services: 'Pedicure' },
// ])

const services = await Services.insertMany([
  { serviceName: 'Manicure', servicePrice: 25.99, addons: [{ addonName: 'Nail Art', addonPrice: 5.99 }, { addonName: 'Cuticle Treatment', addonPrice: 3.99 }] },
  { serviceName: 'Pedicure', servicePrice: 35.99, addons: [{ addonName: 'Foot Massage', addonPrice: 8.99 }, { addonName: 'Callus Removal', addonPrice: 4.99 }] },
  { serviceName: 'Massage', servicePrice: 45.99, addons: [{ addonName: 'Aromatherapy', addonPrice: 7.99 }, { addonName: 'Hot Stones', addonPrice: 9.99 }] },
  { serviceName: 'Facial', servicePrice: 55.99, addons: [{ addonName: 'Exfoliation', addonPrice: 6.99 }, { addonName: 'Mask', addonPrice: 5.99 }] },
  { serviceName: 'Yoga', servicePrice: 30.00}
])


 

  console.log('users seeded');

  process.exit();
});





