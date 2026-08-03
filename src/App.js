import "./App.css";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "./firebase";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RoomList from "./components/RoomList";
import ChatRoom from "./components/ChatRoom";

function App() {
  const [user] = useAuthState(auth);
  const [selectedRoom, setSelectedRoom] = useState("");

  // Show Login Page
  if (!user) {
    return <Login />;
  }

  // Show Chat App
  return (
    <div className="app">
      <Navbar />

      <div className="main-container">
        <div className="sidebar">
          <RoomList
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
          />
        </div>

        <div className="chat-container">
          {selectedRoom ? (
            <ChatRoom roomId={selectedRoom} />
          ) : (
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                color: "#666",
              }}
            >
              💬 Select a room to start chatting
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
