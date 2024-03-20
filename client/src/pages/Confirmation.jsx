import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import massageimg from '../assets/candle2.jpg';
import { useQuery } from '@apollo/client';
import auth from '../utils/auth';
import { GET_USER_BOOKINGS } from '../utils/queries';

function Confirmation() {
  const userId = auth.getProfile().data._id;
  const { loading, data, refetch } = useQuery(GET_USER_BOOKINGS, { variables: { userId } });
  useEffect(() => {
    refetch();
  }, [userId]); 
  const bookings = data ? data.getUserBookings : [];
  const nextAppointment = bookings.length > 0 ? bookings[bookings.length - 1] : null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 0 }}  id="confirmationBg">
      <h1 className="text-center mt-5" id="confirmationTitle" style={{marginBottom:60}}>Radiant Oasis Awaits you</h1>
      
      {nextAppointment && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Card style={{ maxWidth: '50rem', fontSize: 20, backgroundColor: '#a68e45', color: '#231a11' }}>
            <Card.Body>
              <Card.Title>Your Next Appointment:</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{nextAppointment.service[0].serviceName}</Card.Subtitle>
              <Card.Text>
                You have an appointment scheduled for {nextAppointment.date} at {nextAppointment.time} with {nextAppointment.staff.firstName} {nextAppointment.staff.lastName}
              </Card.Text>
              <Card.Link href="#" style={{ color: '#231a11' }}>Reschedule</Card.Link>
              <Card.Link href="#" style={{ color: '#231a11' }}>Cancel</Card.Link>
            </Card.Body>
          </Card>
        </div>
      )}
      
      <div id="confirmationImage" className='d-flex justify-content-center' style={{marginTop:50}}>
        <Image src={massageimg} width="35%" fluid />
      </div>
    </div>
  );
}

export default Confirmation;









