import Pedicure from "../assets/Pedicure.jpg"

const Confirmation = () => {
    return (
    <div className="row featurette mx-4 my-5 pt-4">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading text-end dark-text">Pedicure</h2>
            <p className="lead text-end dark-text">Step into indulgence with our revitalizing pedicure services. Our expert pedicurists deliver a blissful experience, focusing on meticulous nail care and relaxation. Sit back and unwind as we pamper your feet with a soothing soak, precise nail shaping, and a decadent massage. Choose from our curated selection of vibrant polish colors for a touch of personal flair.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="bd-placeholder-img py-5 img-fluid" width="750" height="750"
              src={Pedicure} role="img" preserveAspectRatio="xMidYMid slice"
              focusable="false" />

          </div>
        </div>
    )
}

export default Confirmation;