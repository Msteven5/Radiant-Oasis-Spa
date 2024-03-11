
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import facial2 from '../assets/facial2.jpg'
import stone2 from '../assets/stone2.jpg'
import supplies from '../assets/supplies.jpg'

const BookingHistory = () => {
  return (
    <>
    <Table striped hover style={{marginTop:30}}>
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
          <td>Manicure</td>
          <td>Otto</td>
          <td>01-20-2024</td>
          <td>3:00PM</td>
          <td>$43</td>


        </tr>
        <tr>
          <td>Manicure</td>
          <td>Thornton</td>
          <td>01-20-2024</td>
          <td>3:00PM</td>
          <td>$43</td>
        </tr>
        <tr>
          <td>Manicure</td>
          <td>Thornton</td>
          <td>01-20-2024</td>
          <td>3:00PM</td>
          <td>$43</td>
      
        </tr>
      </tbody>
    </Table>
    <div style={{display:'flex' ,justifyContent:'center', marginTop:50}}>
    <Card style={{ maxWidth: '50rem', fontSize:20, backgroundColor: '#a68e45', color: '#231a11' }}>
      <Card.Body>
        <Card.Title>Your Next Appointment:</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Manicure</Card.Subtitle>
        <Card.Text>
          You have an appointment scheduled for March 30th at 3:00pm with Jessica
        </Card.Text>
        <Card.Link href="#" style={{color:'#231a11'}}>Reschedule</Card.Link>
        <Card.Link href="#" style={{color:'#231a11'}}>Cancel</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div style={{ display: 'inline-flex', justifyContent: 'space-between', margin: 50 }}>
        <img src={facial2} alt="Facial" style={{ height: 'auto', maxWidth: '30%' }} />
        <img src={supplies} alt="Supplies" style={{ height: 'auto', maxWidth: '30%' }} />
        <img src={stone2} alt="Stone" style={{ height: 'auto', maxWidth: '30%' }} />
      </div>

    </>
  )
}

export default BookingHistory;
