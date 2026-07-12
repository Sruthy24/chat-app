import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase";
import ChatRoom from "./ChatRoom";

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [newRoom, setNewRoom] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "rooms"), (snapshot) => {
      const roomList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setRooms(roomList);

      if (roomList.length > 0 && !selectedRoom) {
        setSelectedRoom(roomList[0].id);
      }
    });

    return () => unsubscribe();
  }, [selectedRoom]);

  const createRoom = async () => {
    if (!newRoom.trim()) return;

    await addDoc(collection(db, "rooms"), {
      name: newRoom,
      createdAt: serverTimestamp(),
    });

    setNewRoom("");
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Chat Rooms</h2>

        <input
          type="text"
          placeholder="Enter room name"
          value={newRoom}
          onChange={(e) => setNewRoom(e.target.value)}
        />

        <button onClick={createRoom}>Create Room</button>

        {rooms.map((room) => (
          <button
            key={room.id}
            className="room-btn"
            onClick={() => setSelectedRoom(room.id)}
          >
            {room.name}
          </button>
        ))}
      </div>

      <div className="chat-area">
        {selectedRoom && <ChatRoom roomId={selectedRoom} />}
      </div>
    </div>
  );
}

export default RoomList;
