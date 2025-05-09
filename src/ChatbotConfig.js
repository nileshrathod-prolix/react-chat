import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(
      "Welcome to AI Chat. I was made with care! Pick a topic from the list or type a question below."
    ),
  ],
  headerText: "Chat with us!",
  placeholderText: "Write a messge",
  customComponents: {
    botAvatar: () => null,
    userAvatar: () => null,
  },
};

export default config;
