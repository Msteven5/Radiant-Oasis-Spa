import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from "../../utils/auth";
import { CREATE_USER } from '../../utils/mutations'; 
import './modal.css'

const SignupModal = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '' });
  const [addUser] = useMutation(CREATE_USER); 


  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} id="signUpModal">
      <div className="modal-content p-4 d-flex dark-background justify-content-end">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2 className='text-center gold-text my-3'>Signup</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="d-flex justify-content-end">
            <label htmlFor="firstName" className='me-3 light-text'>First Name:</label>
            <input
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-end">
            <label htmlFor="lastName" className='me-3 light-text'>Last Name:</label>
            <input
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-end ms-5">
            <label htmlFor="email" className='me-3 light-text'>Email:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-end">
            <label htmlFor="password" className='mx-3 light-text'>Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div className="my-2 d-flex justify-content-end">
            <button className=' btn gold-background btn-dark' type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
