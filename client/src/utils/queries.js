import { gql } from '@apollo/client';

export const GET_STAFF = gql`
query GetStaff {
  getStaff {
    _id
    firstName
    lastName
    hours
    services {
      _id
      serviceName
      servicePrice
      addOns {
        addOnName
        addOnPrice
        _id
      }
    }
  }
}
`;

export const GET_USER = gql`
query GetUser($userId: ID!) {
  getUser(userId: $userId) {
    _id
    firstName
    lastName
    email
  }
}
`;

export const GET_STAFFMEMBER = gql`
query GetStaffMember($staffId: ID!) {
  getStaffMember(staffId: $staffId) {
    firstName
    lastName
    hours
    services {
      _id
      serviceName
      servicePrice
      addOns {
        addOnName
        addOnPrice
        _id
      }
    }
  }
}
`;

export const GET_SINGLE_SERVICE = gql`
query GetSingleService($serviceId: ID!) {
  getSingleService(serviceId: $serviceId) {
    _id
    serviceName
    servicePrice
    addOns {
      addOnName
      addOnPrice
      _id
    }
  }
}
`;

export const GET_SERVICES = gql`
  query GetServices {
    getServices {
      _id
      serviceName
      servicePrice
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