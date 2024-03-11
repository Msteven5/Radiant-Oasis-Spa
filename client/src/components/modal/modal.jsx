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
    try {
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      const token = mutationResponse.data.createUser.token; 
      Auth.login(token);
      onClose(); 
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Signup</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label htmlFor="firstName">First Name:</label>
            <input
              placeholder="First"
              name="firstName"
              type="text"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              placeholder="Last"
              name="lastName"
              type="text"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="password">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row flex-end">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
