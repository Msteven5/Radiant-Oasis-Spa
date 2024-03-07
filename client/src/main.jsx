import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home';
import Booking from './pages/Booking';
import Error from './pages/Error';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BookingHistory from './pages/BookingHistory'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/BookingHistory',
        element: <BookingHistory />
      }, {
        path: '/products/:id',
        element: <Booking />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
