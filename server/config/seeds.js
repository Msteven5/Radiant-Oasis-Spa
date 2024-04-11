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

            { fullDate: "2024-04-22", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-04-22", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-04-22", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-04-22", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-04-22", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-04-22", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-04-22", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-04-22", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-04-22", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-04-23", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-04-23", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-04-23", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-04-23", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-04-23", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-04-23", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-04-23", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-04-23", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-04-23", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-04-24", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-04-24", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-04-24", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-04-24", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-04-24", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-04-24", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-04-24", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-04-24", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-04-24", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-04-25", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-04-25", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-04-25", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-04-25", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-04-25", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-04-25", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-04-25", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-04-25", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-04-25", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-04-26", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-04-26", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-04-26", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-04-26", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-04-26", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-04-26", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-04-26", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-04-26", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-04-26", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-04-29", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-04-29", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-04-29", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-04-29", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-04-29", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-04-29", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-04-29", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-04-29", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-04-29", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-04-30", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-04-30", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-04-30", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-04-30", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-04-30", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-04-30", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-04-30", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-04-30", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-04-30", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-05-01", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-05-01", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-05-01", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-05-01", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-05-01", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-05-01", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-05-01", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-05-01", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-05-01", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-05-02", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-05-02", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-05-02", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-05-02", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-05-02", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-05-02", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-05-02", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-05-02", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-05-02", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-05-03", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-05-03", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-05-03", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-05-03", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-05-03", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-05-03", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-05-03", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-05-03", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-05-03", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-05-06", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-05-06", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-05-06", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-05-06", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-05-06", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-05-06", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-05-06", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-05-06", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-05-06", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-05-07", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-05-07", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-05-07", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-05-07", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-05-07", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-05-07", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-05-07", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-05-07", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-05-07", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-05-08", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-05-08", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-05-08", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-05-08", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-05-08", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-05-08", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-05-08", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-05-08", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-05-08", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-05-09", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-05-09", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-05-09", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-05-09", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-05-09", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-05-09", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-05-09", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-05-09", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-05-09", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-05-10", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-05-10", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-05-10", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-05-10", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-05-10", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-05-10", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-05-10", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-05-10", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-05-10", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-05-13", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-05-13", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-05-13", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-05-13", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-05-13", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-05-13", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-05-13", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-05-13", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-05-13", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-05-14", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-05-14", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-05-14", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-05-14", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-05-14", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-05-14", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-05-14", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-05-14", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-05-14", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-05-15", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-05-15", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-05-15", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-05-15", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-05-15", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-05-15", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-05-15", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-05-15", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-05-15", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-05-16", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-05-16", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-05-16", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-05-16", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-05-16", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-05-16", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-05-16", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-05-16", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-05-16", hour: "4:00p-5:00p", available: true },

            { fullDate: "2024-05-17", hour: "8:00a-9:00a", available: true },
            { fullDate: "2024-05-17", hour: "9:00a-10:00a", available: true },
            { fullDate: "2024-05-17", hour: "10:00a-11:00a", available: true },
            { fullDate: "2024-05-17", hour: "11:00a-12:00p", available: true },
            { fullDate: "2024-05-17", hour: "12:00p-1:00p", available: true },
            { fullDate: "2024-05-17", hour: "1:00p-2:00p", available: true },
            { fullDate: "2024-05-17", hour: "2:00p-3:00p", available: true },
            { fullDate: "2024-05-17", hour: "3:00p-4:00p", available: true },
            { fullDate: "2024-05-17", hour: "4:00p-5:00p", available: true }

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


