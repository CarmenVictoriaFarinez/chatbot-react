import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import config from './chatbotConfig/config';
import ActionProvider from './chatbotConfig/ActionProvider';
import MessageParser from './chatbotConfig/MessageParser';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
      </header>
    </div>
  );
}

export default App;
