import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Yui Hatano"
        message="Hi"
        timestamp="35 minutes ago"
        profilePic="https://i.pinimg.com/280x280_RS/66/23/8e/66238e10f271b7258706e6f4b41a8f83.jpg"
      />
      <Chat
        name="Rina Kato"
        message="I Love You"
        timestamp="5 minutes ago"
        profilePic="https://i.ytimg.com/vi/sORhZNCmHS0/maxresdefault.jpg"
      />
      <Chat
        name="Yua Mikami"
        message="How Are You?"
        timestamp="2 minutes ago"
        profilePic="https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/23/a4/38/23a438afcf5315e6dacb133c2f9868ff/23a438afcf5315e6dacb133c2f9868ff.18.jpg"
      />
    </div>
  );
}

export default Chats;
