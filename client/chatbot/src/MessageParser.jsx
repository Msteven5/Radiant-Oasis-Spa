import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.toLowerCase().includes('services') || message.toLowerCase().includes('"services"') || message.toLowerCase().includes('"prices"') || message.toLowerCase().includes('prices')) {
      actions.servicesPrices();
    } 
    else if (message.toLowerCase().includes('location') || message.toLowerCase().includes('"location"')) {
      actions.location();
    } 
    else if (message.toLowerCase().includes('hours') || message.toLowerCase().includes('"hours"')) {
      actions.hours(); 
    } else {
      actions.error();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
