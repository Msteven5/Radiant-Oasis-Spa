const mongoose = require('mongoose');
const db = require('./connection');
const { Staff, Services } = require('../models');
const Availability = require('../models/Availability');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDB('Staff', 'staff');
        await cleanDB('Service', 'services');
        await cleanDB('Availability', 'availabilities');

        const servicesData = [
            { serviceName: 'Manicure', servicePrice: 25.99, addOns: [{ addOnName: 'Nail Art', addOnPrice: 5.99 }, { addOnName: 'Cuticle Treatment', addOnPrice: 3.99 }] },
            { serviceName: 'Pedicure', servicePrice: 35.99, addOns: [{ addOnName: 'Foot Massage', addOnPrice: 8.99 }, { addOnName: 'Callus Removal', addOnPrice: 4.99 }] },
            { serviceName: 'Massage', servicePrice: 45.99, addOns: [{ addOnName: 'Aromatherapy', addOnPrice: 7.99 }, { addOnName: 'Hot Stones', addOnPrice: 9.99 }] },
            { serviceName: 'Facial', servicePrice: 55.99, addOns: [{ addOnName: 'Exfoliation', addOnPrice: 6.99 }, { addOnName: 'Mask', addOnPrice: 5.99 }] },
            { serviceName: 'Yoga', servicePrice: 30.00 }
        ];

        const services = await Services.insertMany(servicesData);

        const availabilityData = [
          
            { fullDate: "2024-03-28", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-03-28", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-03-28", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-03-28", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-03-28", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-03-28", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-03-28", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-03-28", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-03-28", hour: "4:00p-5:00p", available: true },
        
            { fullDate: "2024-03-29", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-03-29", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-03-29", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-03-29", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-03-29", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-03-29", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-03-29", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-03-29", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-03-29", hour: "4:00p-5:00p", available: true },
        
            
            { fullDate: "2024-03-30", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-03-30", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-03-30", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-03-30", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-03-30", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-03-30", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-03-30", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-03-30", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-03-30", hour: "4:00p-5:00p", available: true },
        
            { fullDate: "2024-03-31", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-03-31", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-03-31", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-03-31", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-03-31", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-03-31", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-03-31", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-03-31", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-03-31", hour: "4:00p-5:00p", available: true },
        
            { fullDate: "2024-04-01", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-04-01", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-04-01", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-04-01", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-04-01", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-04-01", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-04-01", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-04-01", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-04-01", hour: "4:00p-5:00p", available: true }
        
        
        
        ];

        const availabilities = await Availability.insertMany(availabilityData);

        const staffData = [
            { firstName: 'Michael', lastName: 'Brown', services: [services.find(service => service.serviceName === 'Manicure')._id], availability: availabilities.map(avail => avail._id) },
            { firstName: 'Jessica', lastName: 'Davis', services: [services.find(service => service.serviceName === 'Yoga')._id], availability: availabilities.map(avail => avail._id) },
            { firstName: 'Christopher', lastName: 'Wilson', services: [services.find(service => service.serviceName === 'Massage')._id], availability: availabilities.map(avail => avail._id) },
            { firstName: 'Emily', lastName: 'Jones', services: [services.find(service => service.serviceName === 'Facial')._id], availability: availabilities.map(avail => avail._id) },
            { firstName: 'Daniel', lastName: 'Taylor', services: [services.find(service => service.serviceName === 'Manicure')._id], availability: availabilities.map(avail => avail._id) },
            { firstName: 'Sophia', lastName: 'Miller', services: [services.find(service => service.serviceName === 'Massage')._id], availability: availabilities.map(avail => avail._id) },
            { firstName: 'Andrew', lastName: 'Anderson', services: [services.find(service => service.serviceName === 'Facial')._id], availability: availabilities.map(avail => avail._id) },
            { firstName: 'Olivia', lastName: 'Moore', services: [services.find(service => service.serviceName === 'Pedicure')._id], availability: availabilities.map(avail => avail._id) },
        ];

        const staff = await Staff.insertMany(staffData);

        console.log('Data seeded successfully');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
});


