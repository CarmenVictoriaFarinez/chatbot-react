import React from 'react';
import BotAvatar from '../components/BotAvatar/BotAvatar';
// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
      botName : "Crazy Bot",
      initialMessages: [createChatBotMessage(`Bienvenido! en que puedo ayudarte?`)],
      customComponents: {
        // Replaces the default header
      header: () => <div style={{ backgroundColor: 'gray', padding: "5px", borderRadius: "3px" }}>Soy tu asistente virtual</div>,
      // Replaces the default bot avatar
      botAvatar: (props) => <BotAvatar {...props} />,
      // Replaces the default bot chat message container
      /*botChatMessage: (props) => <CustomChatMessage {...props} />,
      // Replaces the default user icon
      userAvatar: (props) => <MyUserAvatar {...props} />,
      // Replaces the default user chat message
      userChatMessage: (props) => <MyUserChatMessage {...props} />*/
    },

  // Estilo de la ventana chatbot
      customStyles: {
        botMessageBox: {
          backgroundColor: "purple",
        },
        chatButton: {
          backgroundColor: "purple",
        },
      },
      state: {
        movieTitles: ["The Lord", "Con Air"]
      }
}

export default config