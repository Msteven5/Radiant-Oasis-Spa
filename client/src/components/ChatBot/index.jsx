import config from '../../../chatbot/src/config.jsx';
import Chatbot from 'react-chatbot-kit'
import MessageParser from '../../../chatbot/src/MessageParser.jsx';
import ActionProvider from '../../../chatbot/src/ActionProvider.jsx';
import './chatbot.css'
const MyComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default MyComponent 
