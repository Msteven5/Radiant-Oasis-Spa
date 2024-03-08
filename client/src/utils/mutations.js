import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      _id
    }
  }
`;

export const GET_STAFF = gql`
  query GetStaff {
    getStaff {
      _id
    }
  }
`;

export const GET_SERVICES = gql`
  query GetServices {
    getServices {
      _id
    }
  }
`;

export const GET_BOOKINGS = gql`
  query GetBookings {
    getBookings {
      _id
    }
  }
`;
