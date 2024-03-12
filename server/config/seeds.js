const db = require('./connection');
const { User, Staff , Services } = require('../models');
const cleanDB = require('./cleanDB');


db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Staff', 'staff');
  await cleanDB('Services', 'services');
  await cleanDB('Booking, booking');

const users = await User.insertMany([
  {firstName: 'Michael', lastName:'Davidson', email:'md1232@example.com', password:'abc123'},
  {firstName: 'Anna', lastName:'Cormier', email:'ac1232@example.com', password:'abc123'},
])

const services = await Services.insertMany([
  { serviceName: 'Manicure', servicePrice: 25.99, addOns: [{ addOnName: 'Nail Art', addOnPrice: 5.99 }, { addOnName: 'Cuticle Treatment', addOnPrice: 3.99 }] },
  { serviceName: 'Pedicure', servicePrice: 35.99, addOns: [{ addOnName: 'Foot Massage', addOnPrice: 8.99 }, { addOnName: 'Callus Removal', addOnPrice: 4.99 }] },
  { serviceName: 'Massage', servicePrice: 45.99, addOns: [{ addOnName: 'Aromatherapy', addOnPrice: 7.99 }, { addOnName: 'Hot Stones', addOnPrice: 9.99 }] },
  { serviceName: 'Facial', servicePrice: 55.99, addOns: [{ addOnName: 'Exfoliation', addOnPrice: 6.99 }, { addOnName: 'Mask', addOnPrice: 5.99 }] },
  { serviceName: 'Yoga', servicePrice: 30.00}
])


const staff = await Staff.insertMany([
  { firstName: 'Michael', lastName: 'Brown', services: services.find(service => service.serviceName === 'Manicure')._id, hours: ['12:00p-1:00p','1:00p-2:00p','2:00p-3:00p','3:00p-4:00p', '4:00p-5:00p' ] },
  { firstName: 'Jessica', lastName: 'Davis', services: services.find(service => service.serviceName === 'Yoga')._id, hours: ['8:00a-9:00a','9:00a-10:00a','10:00a-11:00a','12:00p-1:00p','1:00p-2:00p' ] },
  { firstName: 'Christopher', lastName: 'Wilson', services: services.find(service => service.serviceName === 'Massage')._id, hours: ['8:00a-9:00a','9:00a-10:00a','10:00a-11:00a','12:00p-1:00p','1:00p-2:00p' ] },
  { firstName: 'Emily', lastName: 'Jones', services: services.find(service => service.serviceName === 'Facial')._id, hours: ['12:00p-1:00p','1:00p-2:00p','2:00p-3:00p','3:00p-4:00p', '4:00p-5:00p' ] },
  { firstName: 'Daniel', lastName: 'Taylor', services: services.find(service => service.serviceName === 'Manicure')._id, hours: ['8:00a-9:00a','9:00a-10:00a','10:00a-11:00a','12:00p-1:00p','1:00p-2:00p' ] },
  { firstName: 'Sophia', lastName: 'Miller', services: services.find(service => service.serviceName === 'Massage')._id, hours: ['12:00p-1:00p','1:00p-2:00p','2:00p-3:00p','3:00p-4:00p', '4:00p-5:00p' ] },
  { firstName: 'Andrew', lastName: 'Anderson', services: services.find(service => service.serviceName === 'Facial')._id, hours: ['8:00a-9:00a','9:00a-10:00a','10:00a-11:00a','12:00p-1:00p','1:00p-2:00p' ] },
  { firstName: 'Olivia', lastName: 'Moore', services: services.find(service => service.serviceName === 'Pedicure')._id, hours: ['12:00p-1:00p','1:00p-2:00p','2:00p-3:00p','3:00p-4:00p', '4:00p-5:00p' ] },
])




 

  console.log('users seeded');

  process.exit();
});





