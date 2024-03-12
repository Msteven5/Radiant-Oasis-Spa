// import { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { useStoreContext } from '../utils/GlobalState';
// import { GET_SERVICES } from '../utils/queries';

import { useQuery } from '@apollo/client';
import { GET_STAFF } from '../utils/queries';

import Candle from "../assets/candle.jpg"
import Flower from "../assets/flower.jpg"

const Booking = () => {
  const { data: staffData, error } = useQuery(GET_STAFF)
  if (error) {
    console.log(error);
    return null;
  }
  const staffMembers = staffData?.getStaff || [];

  let staffList = staffMembers.map(function (staff) {
    return <option key={staff.id}>{staff.firstName} {staff.lastName}</option>;
  });

  let serviceList = staffMembers.map(function (staff) {
    return staff.services.map(service => (
      <li key={service.id}>{service.serviceName} (${service.servicePrice})</li>
    ));
  });

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

            <input className="form-control my-2 text-center light-background" type="date"></input>

            <div class="dropdown my-2">
              <button class="btn light-background btn-dark w-100 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Available Times
              </button>
              <ul class="dropdown-menu w-100 text-center">
                <li>8:00a - 9:00a</li>
                <li>9:00a - 10:00a</li>
                <li>10:00a - 11:00a</li>
                <li>11:00a - 12:00p</li>
                <li>12:00p - 1:00p</li>
                <li>1:00p - 2:00a</li>
                <li>2:00p - 3:00a</li>
                <li>3:00p - 4:00a</li>
                <li>4:00p - 5:00a</li>
              </ul>
            </div>

            <div class="dropdown my-2">
              <button class="btn light-background btn-dark w-100 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </button>
              <ul class="dropdown-menu w-100 text-center">
                {serviceList}
              </ul>
            </div>

            <div class="dropdown my-2">
              <button class="btn light-background btn-dark w-100 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Staff Member
              </button>
              <ul class="dropdown-menu w-100 text-center">
                {staffList}
              </ul>
            </div>

            <button type="submit" className="my-2 align-self-end btn gold-background btn-dark">Submit</button>
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
