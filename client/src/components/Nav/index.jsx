import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png"

function Nav() {
    if (Auth.loggedIn()) {
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
                      <a className="nav-link active mx-3" aria-current="page" href="#services">Services Available</a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active mx-3" to="/Booking">Book Your Appointment</Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active mx-3" aria-current="page" href="/" onClick={() => Auth.logout()}>
                        Logout
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active mx-3" to="/BookingHistory">Booking History</Link>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-warning" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
          </header>
        </>
    )
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
                      <a className="nav-link active mx-3" aria-current="page" href="#services">Services Available</a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active mx-3" to="/Booking">Book Your Appointment</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active mx-3" to="/Signup">Sign Up</Link>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-warning" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
          </header>
        </>
      );
    }
  }

  export default Nav;
