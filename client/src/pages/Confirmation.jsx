import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import massageimg from '../assets/candle2.jpg';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER_BOOKINGS } from '../utils/queries';

function Confirmation() {
  const userId = "65f10b7fc3cceb3381601b6d";
  const { loading, data } = useQuery(GET_USER_BOOKINGS, { variables: { userId } });
  const bookings = data ? data.getUserBookings : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 0}}  id="confirmationBg">
      <h1 className="text-center mt-5" id="confirmationTitle" style={{marginBottom:60}}>Radiant Oasis Awaits you</h1>
      <Card style={{ backgroundColor: '#a68e45', color: '#231a11', maxWidth: '70%', border:'none', marginBottom:60 }}>
        <Card.Header>Thanks for Booking!</Card.Header>
        <Card.Body>
          <Card.Title>{bookings.length > 0 ? bookings[0].service.serviceName : "[service]"}</Card.Title>
          <Card.Text>
            Your appointment with {bookings.length > 0 ? `${bookings[0].staff.firstName} ${bookings[0].staff.lastName}` : "[name]"} has been scheduled at {bookings.length > 0 ? bookings[0].date + " " + bookings[0].time : "[date&time]"}.
          </Card.Text>
          <div className='d-flex justify-content-around'>
            <Button style={{ backgroundColor: '#231a11', color: '#a28e7b', border: 'none' }}>Need to Cancel?</Button>
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





