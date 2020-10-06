// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    helloWordHandler = () => {
      const message = this.createChatBotMessage("Hello, soy CrazyBot, en que puedo ayudarte")
      this.setChatbotMessage(message)
      
    }

    setChatbotMessage = (message) => {
      this.setState(state => ({...state, messages: [...state.messages, message]}))
      
    }
    
  }
  
  export default ActionProvider;