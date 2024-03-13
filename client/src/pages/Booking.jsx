import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STAFF, GET_STAFFMEMBER, GET_SERVICES, GET_SINGLE_SERVICE } from '../utils/queries';
import { useLazyQuery } from '@apollo/client';
import { useNavigate } from "react-router-dom";
import Candle from "../assets/candle.jpg"
import Flower from "../assets/flower.jpg"

const Booking = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    staffId: '',
    serviceId: '',
  });

  const handleStaffChange = (event) => {
    const { value } = event.target;
    console.log(event.target)
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
    return <option key={hour}>{hour}</option>;
  });

  let addOnsList = availableAddOns.map(addOn => (
    <option key={addOn._id}> {addOn.addOnName} (${addOn.addOnPrice}) </option>
  ));

  return (
    <div id="bookingPage" className="vh-100 dark-background row">

      <div className='col-md-4' id='booking1'>
        <div className='d-flex justify-content-center'>

          <img className="bd-placeholder-img img-fluid mt-4" width="65%"
            src={Candle} role="img" preserveAspectRatio="xMidYMid slice"
            focusable="false" />
        </div>
      </div>

      <div className="bookingPage mt-5 pt-3 col-md-4">
        <div className="row d-flex justify-content-center align-content-center" id="bookingForm">
          <form className=" mt-5 rounded-2">
            <h1 className="text-center gold-text py-3" id="bookNow">Book Now</h1>

            <select onChange={handleServiceChange} className="my-2 text-light light-background p-2 w-100 text-center rounded-2" >
              <option disabled='disabled' selected>Services</option>
              {serviceList}
            </select>

            <select className="my-2 p-2 w-100 text-center text-light light-background rounded-2">
              <option disabled='disabled' selected>Add Ons</option>
              {addOnsList}
            </select>

            <input className="form-control p-2 my-2 text-center text-light light-background" type="date"></input>

            <select onChange={handleStaffChange} className="my-2 p-2 w-100 text-light light-background text-center rounded-2" >
              <option disabled='disabled' selected>Staff Member</option>
              {staffList}
            </select>

            <select className="my-2 p-2 w-100 text-center rounded-2 text-light light-background">
              <option disabled='disabled' selected>Hours</option>
              {hourList}
            </select>

            <input type="tel" id="phone" name="phone" maxLength="12" placeholder="Phone Number (0000000000)" className="my-2 text-center text-light light-background" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />


            <button type="submit" className="my-2 align-self-end btn gold-background btn-dark" onClick={handleButtonClick}>Submit</button>

          </form>
        </div>
      </div>

      <div className='col-md-4 d-flex mt-5 mb-3 justify-content-center pb-5 align-items-end' id="booking2">


        <img className="bd-placeholder-img mt-5 pb-5 img-fluid" width="65%"
          src={Flower} role="img" preserveAspectRatio="xMidYMid slice"
          focusable="false" />

      </div>
    </div>
  );
}

export default Booking
