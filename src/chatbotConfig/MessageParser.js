// Analizador de mensajes: controla lo que sucede cuando el usuario envía un msj
// esta vinculado al proveedor de acciones
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowercase = message
    if (lowercase.includes("Hello word")){
     this.actionProvider.helloWordHandler()
    }
  }
}
  
  export default MessageParser;