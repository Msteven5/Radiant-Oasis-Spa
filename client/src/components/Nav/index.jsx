import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <header>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  <img class="navbar-brand" src="./client/public/images/Logo.png" width="45" height="50" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                  aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                  <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#services">Services Available</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#"><Link to="/Booking">Book Your Appointment</Link></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/" onClick={() => Auth.logout()}>
                        Logout
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#"><Link to="/BookingHistory">Booking History</Link></a>
                    </li>
                  </ul>
                  <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-warning" type="submit">Search</button>
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
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  <img class="navbar-brand" src="./client/public/images/Logo.png" width="45" height="50" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                  aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                  <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#services">Services Available</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#"><Link to="/Booking">Book Your Appointment</Link></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#"><Link to="/signup">Sign Up</Link></a>
                    </li>
                  </ul>
                  <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-warning" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
          </header>
        </>
      );
    }
  }

  return (
    <nav>
      {showNavigation()}
    </nav>
  )
}

  export default Nav;
