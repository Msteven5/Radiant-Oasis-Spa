import React, { useState } from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import SignupModal from '../signup-modal/modal';
import LoginModal from '../login-modal/login-modal'; 
import { useNavigate } from "react-router-dom";
import './index.css'


function Nav() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); 
  const navigate = useNavigate();
  const navigateToServices = () => {
    navigate("/");
    setTimeout(() => {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  }

  const handleLogout = () => {
    Auth.logout();
  }

  if (Auth.loggedIn()) {
    
    const user = Auth.getProfile();
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <img className="navbar-brand" src={Logo} alt="" width="45" height="50" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    <button className="nav-link active mx-3" onClick={navigateToServices}>Services Available</button>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active mx-3" to="/Booking">Book Your Appointment</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active mx-3" to="/BookingHistory">Booking History</Link>
                  </li>
                </ul>
                <div className="navbar-text mx-3">
                  {/* Display user's name */}
                  {user && <span>Welcome, {user.firstName} {user.lastName}</span>}
                </div>
                <ul className="navbar-nav mb-2 mb-md-0">
                  {/* Show logout link */}
                  <li className="nav-item">
                    <button className="nav-link active mx-3" onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  } else {
    
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <img className="navbar-brand" src={Logo} alt="" width="45" height="50" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    <button className="nav-link active mx-3" onClick={navigateToServices}>Services Available</button>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active mx-3" to="/Booking">Book Your Appointment</Link>
                  </li>
                </ul>
                <ul className="navbar-nav mb-2 mb-md-0">
                  {/* Show login and sign up buttons */}
                  <li className="nav-item">
                    <button className="nav-link active mx-3 small-font" onClick={() => setIsLoginModalOpen(true)}>Login</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link active mx-3 small-font" onClick={() => setIsSignupModalOpen(true)}>Sign Up</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <SignupModal isOpen={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)} />
        <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} /> {/* Render the login modal */}
      </>
    );
  }
}

export default Nav;
