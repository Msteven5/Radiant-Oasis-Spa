
import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_STAFF } from '../utils/queries';
import { CREATE_BOOKING } from '../utils/mutations';
import { useNavigate } from "react-router-dom";

import Candle from "../assets/candle.jpg"
import Flower from "../assets/flower.jpg"

const Booking = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    staffId: '',
    serviceId: '',
    addOnId: '',
    phoneNumber: '',
    date: '',
    time: ''
  });

  const handleStaffChange = (event) => {
    const { value } = event.target;
    if (value) {
      setFormState({ ...formState, staffId: value });
    }
  }

  const handleServiceChange = (event) => {
    const { value } = event.target;
    if (value) {
      setFormState({ ...formState, serviceId: value });
    }
  }

  const handleAddOnChange = (event) => {
    const { value } = event.target;
    if (value) {
      setFormState({ ...formState, addOnId: value });
    }
  }

  const handleDateChange = (event) => {
    const { value } = event.target;
    if (value) {
      setFormState({ ...formState, date: value });
    }
  }

  const handleTimeChange = (event) => {
    const { value } = event.target;
    if (value) {
      setFormState({ ...formState, time: value });
    }
  }
  const handlePhoneChange = (event) => {
    const { value } = event.target;
    if (value) {
      setFormState({ ...formState, phoneNumber: value });
    }
  }

  const { data: staffData, error } = useQuery(GET_STAFF)
  if (error) {
    console.log(error);
    return null;
  }
  const filterStaffList = function (members) {
    if (formState.serviceId) {
      return members.filter((staff) => staff.services.some((service) => service._id === formState.serviceId));
    }
    return members;
  };

  const allStaff = staffData?.getStaff || [];
  const staffMembers = filterStaffList(allStaff);
  const staffList = staffMembers.map((staff) => {
    return <option disabled={formState.serviceId ? "" : 'disabled'} value={staff._id} key={staff._id}>{staff.firstName} {staff.lastName}</option>;
  });

  const availableServices = allStaff.reduce(
    (services, member) => {
      member.services.forEach((service) =>
        (services[service._id] = service));
      return services;
    }, {});

  const availableHours = [];
  (formState.staffId ? staffMembers.filter((member) => formState.staffId === member._id) : staffMembers).forEach((member) => {
    member.hours.forEach((hour) => {
      if (!availableHours.includes(hour)) {
        availableHours.push(hour)
      }
    })
  });

  const handleButtonClick = () => {
    navigate("/:userId/Confirmation")
  };

  const availableAddOns = availableServices[formState.serviceId]?.addOns || [];

  let serviceList = Object.values(availableServices).map(service => (
    <option value={service._id} key={service._id}>{service.serviceName} (${service.servicePrice})</option>
  ));

  let hourList = availableHours.map(function (hour) {
    return <option key={hour} value={hour}>{hour}</option>;
  });

  let addOnsList = availableAddOns.map(addOn => (
    <option key={addOn._id} value={addOn._id}> {addOn.addOnName} (${addOn.addOnPrice}) </option>
  ));

  const [createBooking, { error: booking }] = useMutation(CREATE_BOOKING);


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await createBooking({
        variables: {
          userId: '65f15e3872b09af985f65534',
          staffId: formState.staffId,
          serviceId: formState.serviceId,
          addOnId: formState.addOnId,
          phoneNumber: formState.phoneNumber,
          date: formState.date,
          time: formState.time
        },
      });
      if (mutationResponse && mutationResponse.data && mutationResponse.data.createBooking) {
        console.log('Submission successful!');
      } else {
        console.log('Submission failed.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="bookingPage" className="vh-100 dark-background row">

      <div className='col-md-4' id='booking1'>
        <div className='d-flex justify-content-center'>

          <img className="bd-placeholder-img img-fluid mt-4" width="65%"
            src={Candle} role="img" alt="Candle" preserveAspectRatio="xMidYMid slice"
            focusable="false" />
        </div>
      </div>

      <div className="bookingPage mt-5 pt-3 col-md-4">
        <div className="row d-flex justify-content-center align-content-center" id="bookingForm">
          <form className=" mt-5 rounded-2">
            <h1 className="text-center gold-text py-3" id="bookNow">Book Now</h1>


            <select onChange={handleServiceChange} className="my-2 text-light light-background p-2 w-100 text-center rounded-2" required>
              <option disabled='disabled' selected>Services</option>
              {serviceList}
            </select>

            <select onChange={handleAddOnChange} className="my-2 p-2 w-100 text-center text-light light-background rounded-2">
              <option disabled='disabled' selected>Add Ons</option>


              {addOnsList}
            </select>

            <input onChange={handleDateChange} className="form-control p-2 my-2 text-center text-light light-background" type="date" required></input>


            <select onChange={handleStaffChange} className="my-2 p-2 w-100 text-light light-background text-center rounded-2" required>
              <option disabled='disabled' selected>Staff Member</option>
              {staffList}
            </select>

            <select onChange={handleTimeChange} className="my-2 p-2 w-100 text-center rounded-2 text-light light-background" required>
              <option disabled='disabled' selected>Hours</option>
              {hourList}
            </select>

            <input type="tel" onChange={handlePhoneChange} id="phone" name="phone" maxLength="12" placeholder="Phone Number 000-000-0000" className="my-2 text-center text-light light-background" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />


            <button type="submit" onClick={handleButtonClick} onSubmit={handleFormSubmit} className="my-2 align-self-end btn gold-background btn-dark">Submit</button>

          </form>
        </div>
      </div>

      <div className='col-md-4 d-flex mt-5 mb-3 justify-content-center pb-5 align-items-end' id="booking2">


        <img className="bd-placeholder-img mt-5 pb-5 img-fluid" width="65%"
          src={Flower} role="img" alt="Flower" preserveAspectRatio="xMidYMid slice"
          focusable="false" />

      </div>
    </div>
  );
}

export default Booking;
