import Candle from "../assets/candle.jpg"
import Aeroma from "../assets/aeroma.jpg"
import Facial from "../assets/facial.jpg"
import Flower from "../assets/flower.jpg"
import Manicure from "../assets/manicure.jpg"
import Massage1 from "../assets/massage1.jpg"
import Massage2 from "../assets/massage2.jpg"
import Massage3 from "../assets/massage3.jpg"
import Mudmask from "../assets/mudmask.jpg"
import Pedicure from "../assets/pedicure.jpg"
import Sauna from "../assets/sauna.jpg"
import Stone from "../assets/stone.jpg"
import Worker1 from "../assets/worker1.jpg"
import Worker2 from "../assets/worker2.jpg"
import Worker3 from "../assets/worker3.jpg"
import MyComponent from "../components/ChatBot/Index"
import React, { useState } from 'react';
import Logo from "../assets/logoBubble.png"
import './Home.css';

const Home = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const closeChatbot = () => {
    setShowChatbot(false);
  };

  return (
    <>
     
     <div className="chatbot-button-container">
        <button onClick={toggleChatbot} className="chatbot-button">
          <img src={Logo} alt="Chatbot Icon" className="chatbot-icon" />
        </button>
      </div>

      {showChatbot && (
        <div className="chatbot-container">
          <MyComponent />
          {/* Close button */}
          <button onClick={closeChatbot} className="close-button">
            X
          </button>
        </div>
      )}

      <main>
       
      
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        
          <div className="carousel-inner">
            <div className="carousel-item active" id="carousel1">
              <div className="d-flex justify-content-center" id="title-container">
              </div>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Example headline.</h1>
                  <p>Some representative placeholder content for the first slide of the carousel.</p>
                  <p><a className="btn btn-md gold-background text-light btn-dark" href="#">Sign up today</a></p>
                </div>
              </div>
            </div>

            <div className="carousel-item" id="carousel2">

              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>Some representative placeholder content for the second slide of the carousel.</p>
                  <p><a className="btn btn-md gold-background text-light btn-dark" href="#">Learn more</a></p>
                </div>
              </div>
            </div>

            <div className="carousel-item" id="carousel3">

              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>Some representative placeholder content for the third slide of this carousel.</p>
                  <p><a className="btn btn-md gold-background text-light btn-dark" href="#">Browse gallery</a></p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        <div className="container-fluid marketing py-5">
          <div className="container marketing py-5">
            <h2 className="text-center my-3">Meet the Staff</h2>
            <div className="row mt-5">
              <div className="col-lg-4">
                <img className="bd-placeholder-img img-fluid rounded-circle" width="140" height="140"
                  src={Worker1} role="img" preserveAspectRatio="xMidYMid slice"
                  focusable="false" />

                <h2 className="py-3">Andrew Anderson</h2>
                <p>Aromatherapy and Nail Expert.</p>
                <p className="py-4"><a className="btn gold-background" href="#">Book Now &raquo;</a></p>
              </div>
              <div className="col-lg-4">
                <img className="bd-placeholder-img img-fluid rounded-circle" width="140" height="140"
                  src={Worker2} role="img" preserveAspectRatio="xMidYMid slice"
                  focusable="false" />


                <h2 className="py-3">Michael Brown</h2>
                <p>Massage Therapist and Mixology Expert.</p>
                <p className="py-4"><a className="btn gold-background" href="#">Book Now &raquo;</a></p>
              </div>
              <div className="col-lg-4">
                <img className="bd-placeholder-img img-fluid rounded-circle" width="140" height="140"
                  src={Worker3} role="img" preserveAspectRatio="xMidYMid slice"
                  focusable="false" />


                <h2 className="py-3">Jessica Davis</h2>
                <p>Yoga Instructor and Breathwork Master</p>
                <p className="py-4"><a className="btn gold-background" href="#">Book Now &raquo;</a></p>
              </div>

              <div className="col-lg-4">
                <img className="bd-placeholder-img img-fluid rounded-circle" width="140" height="140"
                  src={Worker3} role="img" preserveAspectRatio="xMidYMid slice"
                  focusable="false" />

                <h2 className="py-3">Michael Brown</h2>
                <p>Massage Therapist and Mixology Expert.</p>
                <p className="py-4"><a className="btn gold-background" href="#">Book Now &raquo;</a></p>
              </div>
              <div className="col-lg-4">
                <img className="bd-placeholder-img img-fluid rounded-circle" width="140" height="140"
                  src={Worker3} role="img" preserveAspectRatio="xMidYMid slice"
                  focusable="false" />

                <h2 className="py-3">Michael Brown</h2>
                <p>Massage Therapist and Mixology Expert.</p>
                <p className="py-4"><a className="btn gold-background" href="#">Book Now &raquo;</a></p>
              </div>
              <div className="col-lg-4">
                <img className="bd-placeholder-img img-fluid rounded-circle" width="140" height="140"
                  src={Worker3} role="img" preserveAspectRatio="xMidYMid slice"
                  focusable="false" />

                <h2 className="py-3">Michael Brown</h2>
                <p>Massage Therapist and Mixology Expert.</p>
                <p className="py-4"><a className="btn gold-background" href="#">Book Now &raquo;</a></p>
              </div>

            </div>
          </div>
        </div>


        <hr className="featurette-divider m-0" />
        <article className="row dark-background py-5" id="services">

          <div className="row featurette my-5 pt-4">
            <div className="col-md-7">
              <h2 className="featurette-heading light-text ps-5">Manicure! It’ll blow your mind.</h2>

              <p className="lead ps-5 light-text">Some great placeholder content for the first featurette here.
                Imagine some
                exciting
                prose here.</p>
            </div>
            <div className="col-md-5">
              <img className="bd-placeholder-img ms-3 py-5 img-fluid" width="750" height="750"
                src={Manicure} role="img" preserveAspectRatio="xMidYMid slice"
                focusable="false" />
            </div>
          </div>
        </article>

        <hr className="featurette-divider py-5 m-0" />

        <div className="row featurette my-5 pt-4">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading text-end dark-text">Oh yeah, it’s that good. See for yourself.</h2>
            <p className="lead text-end dark-text">Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual real-world content in place.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="bd-placeholder-img py-5 img-fluid" width="750" height="750"
              src={Pedicure} role="img" preserveAspectRatio="xMidYMid slice"
              focusable="false" />

          </div>
        </div>

        <hr className="featurette-divider m-0" />

        <article className="row dark-background py-5">

          <div className="row featurette my-5 pt-4">
            <div className="col-md-7">
              <h2 className="featurette-heading light-text ps-5">Massage! It’ll blow your mind.</h2>

              <p className="lead ps-5 light-text">Some great placeholder content for the first featurette here.
                Imagine some
                exciting
                prose here.</p>
            </div>
            <div className="col-md-5">
              <img className="bd-placeholder-img ms-3 py-5 img-fluid" width="750" height="750"
                src={Facial} role="img" preserveAspectRatio="xMidYMid slice"
                focusable="false" />
              
            </div>
          </div>
        </article>

        <hr className="featurette-divider py-5 m-0" />

        <div className="row featurette my-5 pt-4">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading text-end dark-text">Oh yeah, it’s that good. See for yourself.</h2>
            <p className="lead text-end dark-text">Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual real-world content in place.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="bd-placeholder-img py-5 img-fluid" width="750" height="750"
              src= {Massage3} role="img" preserveAspectRatio="xMidYMid slice"
              focusable="false" />

          </div>
        </div>

        <h3 className="text-center pb-2 dark-text border-bottom border-3 border-dark">See What Our Clients Are Saying!</h3>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active dark-background" data-bs-interval="5000" id="testimonial1">

              <div className="container d-flex justify-content-center">
                <img className="bd-placeholder-img my-5 img-fluid rounded-circle" width="200" height="200"
                  src={Worker2} role="img" preserveAspectRatio="xMidYMid slice"
                  focusable="false" />

                <div className="carousel-caption text-center light-text mb-5">
                  <h1>Molly Ringwell!</h1>
                  <p>"Some of the best happy endings, this side of the Mississippi!!" - Another Satisfied Customer</p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="5000" id="testimonial2">

              <div className="container d-flex justify-content-center">
                <img className="bd-placeholder-img my-5 img-fluid rounded-circle" width="200" height="200"
                  src={Worker3} role="img" preserveAspectRatio="xMidYMid slice"
                  focusable="false" />

                <div className="carousel-caption text-center dark-text mb-5">
                  <h1>Flawless!</h1>
                  <p>Some representative placeholder content for the first slide of the carousel.</p>
                </div>
              </div>
            </div>

            <div className="carousel-item dark-background" data-bs-interval="5000" id="testimonial3">

              <div className="container d-flex justify-content-center">
                <img className="bd-placeholder-img my-5 img-fluid rounded-circle" width="200" height="200"
                  src={Worker2} role="img" preserveAspectRatio="xMidYMid slice"
                  focusable="false" />

                <div className="carousel-caption text-center light-text mb-5">
                  <h1>Greater Than Great!</h1>
                  <p>Some representative placeholder content for the first slide of the carousel.</p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="5000" id="testimonial2">

              <div className="container d-flex justify-content-center">
                <img className="bd-placeholder-img my-5 img-fluid rounded-circle" width="200" height="200"
                  src={Worker3} role="img" preserveAspectRatio="xMidYMid slice"
                  focusable="false" />

                <div className="carousel-caption text-center dark-text mb-5">
                  <h1>Example headline.</h1>
                  <p>Some representative placeholder content for the first slide of the carousel.</p>
                </div>
              </div>
            </div>

            <div className="carousel-item dark-background" data-bs-interval="5000" id="testimonial3">

              <div className="container d-flex justify-content-center">
                <img className="bd-placeholder-img my-5 img-fluid rounded-circle" width="200" height="200"
                  src={Worker3} role="img" preserveAspectRatio="xMidYMid slice"
                  focusable="false" />

                <div className="carousel-caption text-center light-text mb-5">
                  <h1>Example headline.</h1>
                  <p>Some representative placeholder content for the first slide of the carousel.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <footer className="container ">
          <p className="float-end"><a href="#">Back to top</a></p>
          <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
        </footer>
      </main>
    </>
  )
};

export default Home;
