// Chatbot.jsx

import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import MyAvatar from './MyAvatar';
import './config.css'; 

const config = {
  initialMessages: [createChatBotMessage(`Hello, I can try to help you, I am limited on responses but please try one of the following "services" , "prices" , "location" or "hours" `)],
  
  customComponents: {
    // Replaces the default header
    header: () => <div className="chatbot-header">Radiant Oasis</div>,
    // Replaces the default bot avatar
    botAvatar: (props) => <MyAvatar {...props} />,
    // Replaces the default user icon
    // Replaces the default user chat message
  },
};

export default config;
