// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const servicesPrices = () => {
    const botMessage = createChatBotMessage('We have the following services: Manicure ($25.99), Yoga ($30.00), Massage ($45.99) , (Facial $55.99) and (Pedicure $35.99)');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const location = () => {
    const botMessage = createChatBotMessage('We are located at 7638 Spa Avenue, Oasis Tx 75434, see you soon!');

    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, botMessage],
    }));
  };
  const hours = () => {
    const botMessage = createChatBotMessage('We are open 9:00 - 5:00 Monday through Saturday, see you soon!');

    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, botMessage],
    }));
  };
  const error = () => {
    const botMessage = createChatBotMessage('I am sorry, that was not a valid input. Please try again!');

    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, botMessage],
    }));
  };
  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            servicesPrices,
            location,
            hours,
            error
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;