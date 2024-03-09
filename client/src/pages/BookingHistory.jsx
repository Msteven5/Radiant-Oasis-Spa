// import { Link } from 'react-router-dom';

// import { useQuery } from '@apollo/client';
// import { QUERY_USER } from '../utils/queries';

// function OrderHistory() {
//   const { data } = useQuery(QUERY_USER);
//   let user;

//   if (data) {
//     user = data.user;
//   }
import Worker2 from "../assets/Worker2.jpg"

const BookingHistory = () => {
  return (
    <>
        <h2 className="py-3">Andrew Anderson</h2>
        <p>Specializes in facials</p>
        <p className="py-4"><a className="btn gold-background" href="#">Book Now &raquo;</a></p>

      <div className="col-lg-4">
        <img className="bd-placeholder-img img-fluid rounded-circle" width="140" height="140"
          src={Worker2} role="img" preserveAspectRatio="xMidYMid slice"
          focusable="false" />
      </div>
    </>
  )
}

export default BookingHistory;
