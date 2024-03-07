import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BookingHistory from './pages/BookingHistory'
import Booking from './pages/Booking'
import Conformation from './pages/Confirmation'
import Error from './pages/Error'

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
      },
      {
        path: '/Booking',
        element: <Booking />
      },
      {
        path: '/Conformation',
        element: <Conformation />
      },
      {
        path: '/Error',
        element: <Error />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
