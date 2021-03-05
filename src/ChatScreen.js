import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Rina Kato",
      image: "https://i.ytimg.com/vi/sORhZNCmHS0/maxresdefault.jpg",
      message: "Hello",
    },
    {
      name: "Rina Kato",
      image: "https://i.ytimg.com/vi/sORhZNCmHS0/maxresdefault.jpg",
      message: "Daisuke",
    },
    {
      message: "Me too",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH RINA KATO ON 21/2/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen__input" action="">
          <input
            className="chatScreen__inputField"
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="chatScreen__inputButton"
            type="submit"
            onClick={handleSend}
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
