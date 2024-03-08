const typeDefs = `

input ServiceInput {
  id: ID!
  name: String!
  price: Float!
  addOns: [AddOnInput] # Optional add-ons
}

input AddOnInput {
  id: ID!
  name: String!
  price: Float!
}

type Auth {
  token: ID! # JWT 
  user: User! # Authenticated 
}

type User {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  birthday: String
  bookings: [Booking!]!
}

type Service {
  id: ID!
  name: String!
  price: Float!
  addOns: [AddOn!]!
}

type Staff {
  id: ID!
  firstName: String!
  lastName: String!
  services: [Service!]!
}

type AddOn {
  id: ID!
  name: String!
  price: Float!
}

type Booking {
  id: ID!
  user: User!
  service: Service!
  staff: Staff!
  date: String!
  time: String!
}

type Query {
  getUsers: [User!]!
  getUser(id: ID!): User
  getStaff: [Staff!]!
  getServices: [Service!]!
  getBookings: [Booking!]!
}

type Mutation {
  login(email: String!, password: String!): Auth! # Login mutation
  logout: String! # Logout mutation
  createUser(firstName: String!, lastName: String!, email: String!, password: String!, birthday: String): User!
  createBooking(userId: ID!, services: [ServiceInput]!, staffId: ID!, date: String!, time: String!): Booking!
}

`;

module.exports = typeDefs;
