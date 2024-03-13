import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import facial2 from '../assets/facial2.jpg';
import stone2 from '../assets/stone2.jpg';
import supplies from '../assets/supplies.jpg';
import { useQuery } from '@apollo/client';
import { GET_USER_BOOKINGS } from '../utils/queries';

const BookingHistory = () => {

  const userId = "65f1ba1147a16939793bfa0d";

  const { loading, data } = useQuery(GET_USER_BOOKINGS, { variables: { userId } });
  const bookings = data ? data.getUserBookings : [];
  const nextAppointment = bookings.length > 0 ? bookings[0] : null;

  return (
    <div id="historyContainer" className="vh-100">
      <Table striped hover style={{ marginTop: 30 }}>
        <thead>
          <tr>
            <th>Service</th>
            <th>Staff Member</th>
            <th>Date</th>
            <th>Time</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Facial</td>
            <td> Emily Jones</td>
            <td> 02/18/2024</td>
            <td>8:00a - 9:00a</td>
            <td> 55.99 </td>
          </tr>
          <tr>
            <td> Yoga</td>
            <td> Jessica Davis </td>
            <td> 03/12/2024</td>
            <td>12:00p - 1:00p</td>
            <td> 30.00 </td>
          </tr>
          <tr>
            <td> Facial</td>
            <td> Andrew Anderson</td>
            <td> 03/16/2024</td>
            <td>2:00p - 3:00p</td>
            <td> 55.99 </td>
          </tr>
          <tr>
            <td> Manicure</td>
            <td> Michael Brown</td>
            <td> 03/21/2024</td>
            <td>3:00p - 4:00p</td>
            <td> 25.99 </td>
          </tr>
        </tbody>
      </Table>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 0 }}>
        <h1 className="text-center mt-5" id="confirmationTitle" style={{ marginBottom: 60 }}>Radiant Oasis Awaits you</h1>
        <Card style={{ backgroundColor: '#a68e45', color: '#231a11', maxWidth: '70%', border: 'none', marginBottom: 60 }}>
          <Card.Body>
            <Card.Title>Your Most Recent Appointment</Card.Title>
            <Card.Text>
              with Michael Brown has been scheduled at 03/21/2024 from 3:00p - 4:00p.
            </Card.Text>
            <div className='d-flex justify-content-around'>
            </div>
          </Card.Body>
        </Card>
        <div style={{ display: 'inline-flex', justifyContent: 'space-between', margin: 50 }} id="historyImages">
          <img src={facial2} alt="Facial" style={{ height: 'auto', maxWidth: '30%' }} />
          <img src={supplies} alt="Supplies" style={{ height: 'auto', maxWidth: '30%' }} />
          <img src={stone2} alt="Stone" style={{ height: 'auto', maxWidth: '30%' }} />
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;



