import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import massageimg from '../assets/candle2.jpg'

function Confirmation() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 0}}  id="confirmationBg">
      <h1 className="text-center mt-5" id="confirmationTitle" style={{marginBottom:60}}>Radiant Oasis Awaits you</h1>
      <Card style={{ backgroundColor: '#a68e45', color: '#231a11', maxWidth: '70%', border:'none', marginBottom:60 }}>
        <Card.Header>Thanks for Booking!</Card.Header>
        <Card.Body>
          <Card.Title>[service]</Card.Title>
          <Card.Text>
            Your appointment with [name] has been scheduled at [date&time].
            You will be sent a confirmation text at [users phone number]
          </Card.Text>
          <div className='d-flex justify-content-around'>
          <Button style={{ backgroundColor: '#231a11', color: '#a28e7b', border: 'none' }}>Need to Cancel?</Button>
          {/* <Button style={{ backgroundColor: '#231a11', color: '#a28e7b', border: 'none' }}>Need to Reschedule?</Button> */}

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

