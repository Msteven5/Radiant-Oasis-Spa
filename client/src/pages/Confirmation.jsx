import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import massageimg from '../assets/candle2.jpg';
import { useQuery } from '@apollo/client';
import { GET_USER_BOOKINGS } from '../utils/queries';

function Confirmation() {
  const userId = "65f1ba1147a16939793bfa0d";

  const { loading, data } = useQuery(GET_USER_BOOKINGS, { variables: { userId } });
  const bookings = data ? data.getUserBookings : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 0}}  id="confirmationBg">
      <h1 className="text-center mt-5" id="confirmationTitle" style={{marginBottom:60}}>Radiant Oasis Awaits you</h1>
      <Card style={{ backgroundColor: '#a68e45', color: '#231a11', maxWidth: '70%', border:'none', marginBottom:60 }}>
        <Card.Header>Thanks for Booking!</Card.Header>
        <Card.Body>
          <Card.Title>Manicure</Card.Title>
          <Card.Text>
            Your appointment with Michael Brown has been scheduled at 03/21/2024 from 3:00p - 4:00p.
          </Card.Text>
          <div className='d-flex justify-content-around'>
          </div>
        </Card.Body>
      </Card>
      <div id="confirmationImage" className='d-flex justify-content-center'>
        <Image src={massageimg} width="35%" fluid />
      </div>
    </div>
  );
}

export default Confirmation;






