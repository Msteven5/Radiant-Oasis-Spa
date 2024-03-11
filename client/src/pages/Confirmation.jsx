import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import massageimg from '../assets/candle2.jpg'

function WithHeaderExample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px', height:'100vh' }}>
      <h1 style={{marginBottom:60}}>Radiant Oasis Awaits you</h1>
      <Card style={{ backgroundColor: '#a68e45', color: '#231a11', maxWidth: '70%', border:'none', marginBottom:60 }}>
        <Card.Header>Thanks for Booking!</Card.Header>
        <Card.Body>
          <Card.Title>[service]</Card.Title>
          <Card.Text>
            Your appointment with [name] has been scheduled at [date&time].
            You will be sent a confirmation text at [users phone number]
          </Card.Text>
          <Button style={{ backgroundColor: '#231a11', color: '#a28e7b', border: 'none' }}>Reschedule or Cancel</Button>
        </Card.Body>
      </Card>
      <div style={{margin:'20px', height:600, width:600}}>
      <Image src={massageimg} style={{height: 'auto', width: '100%'}} fluid />
      </div>
    </div>
  );
}

export default WithHeaderExample;

