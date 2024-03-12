import { gql } from '@apollo/client';

export const GET_STAFF = gql`
query GetStaff {
  getStaff {
    id
    firstName
    lastName
    services {
      id
      serviceName
      servicePrice
      addOns {
        addOnName
        addOnPrice
        id
      }
    }
  }
}
`;

export const GET_SERVICES = gql`
  query GetServices {
    getServices {
      id
    }
  }
`;

export const GET_BOOKINGS = gql`
  query GetBookings {
    getBookings {
      _id
      service
      staff 
      date 
      time
    }
  }
`;

// export const GET_USER = gql`
// query GetUser {
//   getUser {
// }
// }
// `;

// NEED TO ADD MORE INFO TO THIS FILE