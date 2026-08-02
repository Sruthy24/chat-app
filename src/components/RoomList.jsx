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
  const [search, setSearch] = useState("");

  useEffect(() => {

    const unsubscribe = onSnapshot(
      collection(db, "rooms"),
      (snapshot) => {

        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setRooms(list);

        if (list.length > 0 && !selectedRoom) {
          setSelectedRoom(list[0].id);
        }
      }
    );

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

  const filteredRooms = rooms.filter((room) =>
    room.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main-container">

      <div className="sidebar">

        <h3>Chat Rooms</h3>

        <input
          className="search-input"
          placeholder="🔍 Search room..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="create-room">

          <input
            placeholder="New room"
            value={newRoom}
            onChange={(e) => setNewRoom(e.target.value)}
          />

          <button onClick={createRoom}>
            + Create
          </button>

        </div>

        <div className="room-list">

          {filteredRooms.map((room) => (

            <div
              key={room.id}
              className={
                selectedRoom === room.id
                  ? "room active-room"
                  : "room"
              }
              onClick={() => setSelectedRoom(room.id)}
            >
              💬 {room.name}
            </div>

          ))}

        </div>

      </div>

      <div className="chat-section">

        {selectedRoom ? (
          <ChatRoom roomId={selectedRoom} />
        ) : (
          <div className="empty-chat">
            Select a room
          </div>
        )}

      </div>

    </div>
  );
}

export default RoomList;
