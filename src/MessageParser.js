class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("Hello")
    ) {
      this.actionProvider.greet();
    }
  }
}

export default MessageParser;
