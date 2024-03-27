import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import facial2 from '../assets/facial2.jpg';
import stone2 from '../assets/stone2.jpg';
import supplies from '../assets/supplies.jpg';
import { useQuery, useMutation } from '@apollo/client';
import auth from '../utils/auth';
import { GET_USER_BOOKINGS } from '../utils/queries';
import { CANCEL_BOOKING } from '../utils/mutations';

const BookingHistory = () => {
  const userId = auth.getProfile().data._id;
  const { loading, data, refetch } = useQuery(GET_USER_BOOKINGS, { variables: { userId } });

  useEffect(() => {
    refetch();
  }, [userId, refetch]); 

  const bookings = data ? data.getUserBookings : [];
 

  
  const nextAppointment = bookings.length > 0 ? bookings[bookings.length - 1] : null;


  const [cancelBookingMutation] = useMutation(CANCEL_BOOKING);
  const handleCancelBooking = async (bookingId) => {
    console.log('Booking ID:', bookingId);
    try {
      const cancBooking = await cancelBookingMutation({
        variables: { id: bookingId }
      }); 
      refetch();
      alert('Booking cancelled!');
    } catch (error) {
      console.error('Error cancelling booking:', error);
    }
  };
  
 
  return (
    <div id="historyContainer" className="vh-100">
      {bookings.length > 0 ? (  
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
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>
                  {booking.service.map((service, index) => (
                    <div key={index}>{service.serviceName}</div>
                  ))}
                </td>
                <td>{`${booking.staff.firstName} ${booking.staff.lastName}`}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>
                  {booking.service.reduce((totalPrice, service) => totalPrice + service.servicePrice, 0)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h1 style={{ marginTop:50, textAlign:'center'}}>No Bookings Yet!</h1>  
      )}
      {nextAppointment && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Card style={{ maxWidth: '50rem', fontSize: 20, backgroundColor: '#a68e45', color: '#231a11' }}>
            <Card.Body>
              <Card.Title>Your Next Appointment:</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{nextAppointment.service[0].serviceName}</Card.Subtitle>
              <Card.Text>
                You have an appointment scheduled for {nextAppointment.date} at {nextAppointment.time} with{' '}
                {nextAppointment.staff.firstName} {nextAppointment.staff.lastName}
              </Card.Text>
              <Card.Link href="#" style={{ color: '#231a11' }} onClick={() => handleCancelBooking(nextAppointment._id)}>Cancel</Card.Link>
            </Card.Body>
          </Card>
        </div>
      )}
      <div style={{ display: 'inline-flex', justifyContent: 'space-between', margin: 50 }} id="historyImages">
        <img src={facial2} alt="Facial" style={{ height: 'auto', maxWidth: '30%' }} />
        <img src={supplies} alt="Supplies" style={{ height: 'auto', maxWidth: '30%' }} />
        <img src={stone2} alt="Stone" style={{ height: 'auto', maxWidth: '30%' }} />
      </div>
    </div>
  )};
  
  
export default BookingHistory;




