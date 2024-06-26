import { gql } from '@apollo/client';


export const GET_STAFF = gql`
  query GetStaff {
    getStaff {
      _id
      firstName
      lastName
      availability { 
        _id
        fullDate
        hour
        available
      }
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

export const GET_USER_BOOKINGS = gql`
query GetUserBookings($userId: ID!) {
  getUserBookings(userId: $userId) {
  _id
  date
  time
  service {
    serviceName
    servicePrice
  }
  staff {
    firstName
    lastName
  }
}
}
`;

export const GET_AVAILABILITY = gql`
  query GetAvailability($fullDate: String!, $hour: String!) {
    availability(fullDate: $fullDate, hour: $hour) {
      _id
      fullDate
      hour
      available
    }
  }
`;