// import { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import { useStoreContext } from '../utils/GlobalState';
// import { UPDATE_PRODUCTS } from '../utils/actions';
// import { QUERY_PRODUCTS } from '../utils/queries';


// function Detail() {
//   const [state, dispatch] = useStoreContext();
//   const { id } = useParams();

//   const [currentProduct, setCurrentProduct] = useState({});

//   const { loading, data } = useQuery(QUERY_PRODUCTS);

//   const { products } = state;

//   useEffect(() => {
//     if (products.length) {
//       setCurrentProduct(products.find((product) => product._id === id));
//     } else if (data) {
//       dispatch({
//         type: UPDATE_PRODUCTS,
//         products: data.products,
//       });
//     }
//   }, [products, data, dispatch, id]);
const Booking = () => {
  return (

          <div className="carousel-inner">
            <div className="carousel-item active" id="carousel1">
              <div className="d-flex justify-content-center" id="title-container">
              </div>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1></h1>
                  <p>Rejuvenate Your Senses, Renew Your Spirit: Your Oasis of Serenity Awaits</p>
                  <p><a className="btn btn-md gold-background text-light btn-dark" href="#">BOOK NOW</a></p>
                </div>
              </div>
            </div>
            </div>
  );
      }
export default Booking
