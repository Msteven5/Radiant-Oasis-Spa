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
    return <option>{staff.firstName} {staff.lastName}</option>;
  });
  // let serviceList = staffMembers.map(function (staff) {
  //   return <option value={staff.services.serviceName}>{staff.services.serviceName}</option>;
  // })

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

            <div className="input-group mb-3">
              <input type="text" className="form-control" name="name" placeholder="Name or Company" aria-label="User's name or company" aria-describedby="basic-addon2" required />
            </div>

            <div className="input-group mb-3">
              <input type="text" className="form-control" name="name" placeholder="Name or Company" aria-label="User's name or company" aria-describedby="basic-addon2" required />
            </div>

            <div className="input-group mb-3">
              <input type="text" className="form-control" name="name" placeholder="Name or Company" aria-label="User's name or company" aria-describedby="basic-addon2" required />
            </div>

            <div className="input-group mb-3">
              <input type="text" className="form-control" name="name" placeholder="Name or Company" aria-label="User's name or company" aria-describedby="basic-addon2" required />
            </div>

            <input className="form-control mt-3" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
            {/* <datalist id="datalistOptions">
              {serviceList}
            </datalist> */}

            <input className="form-control" type="date"></input>

            <input className="form-control mt-3" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
            <datalist id="datalistOptions">
              {staffList}
            </datalist>

            <button type="submit" className="btn dark-background btn-dark">Submit</button>
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
