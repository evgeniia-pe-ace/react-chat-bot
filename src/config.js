import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions/LearningOptions";
const config = {
  // initialMessages: [createChatBotMessage(`Hi I am a bot`)]
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    })
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#37BB7E",
    },
    chatButton: {
      backgroundColor: "#37FB7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props}/>
    }
  ]
}

export default config