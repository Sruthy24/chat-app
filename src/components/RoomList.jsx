import { useState } from "react";
import ChatRoom from "./ChatRoom";

function RoomList() {

  const [room, setRoom] = useState("General");

  const rooms = [
    "General",
    "Coding",
    "Sports",
    "Music"
  ];

  return (
    <div className="container">

      <div className="sidebar">

        <h3>Rooms</h3>

        {
          rooms.map((r) => (
            <button
              key={r}
              onClick={() => setRoom(r)}
            >
              {r}
            </button>
          ))
        }

      </div>

      <ChatRoom room={room} />

    </div>
  );
}

export default RoomList;
