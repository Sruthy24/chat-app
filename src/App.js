import "./App.css";
import { useState } from "react";
import RoomList from "./components/RoomList";
import ChatRoom from "./components/ChatRoom";

function App() {
  const [selectedRoom, setSelectedRoom] = useState("General");

  return (
    <div className="app">

      {/* Sidebar */}
      <div className="sidebar">
        <RoomList
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
        />
      </div>

      {/* Chat Area */}
      <div className="chat-container">
        <ChatRoom roomId={selectedRoom} />
      </div>

    </div>
  );
}

export default App;
