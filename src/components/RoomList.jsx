import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase";

function RoomList({ selectedRoom, setSelectedRoom }) {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "rooms"), (snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return unsubscribe;
  }, []);

  const createRoom = async () => {
    if (!roomName.trim()) return;

    await addDoc(collection(db, "rooms"), {
      name: roomName,
      createdAt: new Date(),
    });

    setRoomName("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Logo */}

      <div
        style={{
          padding: "25px",
          borderBottom: "1px solid #24313a",
        }}
      >
        <h1 style={{ color: "white" }}>💬 ChatSphere</h1>
      </div>

      {/* Search */}

      <div style={{ padding: "20px" }}>
        <input
          placeholder="Search room..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "13px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "15px",
          }}
        />
      </div>

      {/* Create Room */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "0 20px 20px",
        }}
      >
        <input
          placeholder="New room"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          style={{
            flex: 1,
            padding: "13px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <button
          onClick={createRoom}
          style={{
            background: "#00a884",
            color: "white",
            border: "none",
            padding: "13px 18px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Create
        </button>
      </div>

      {/* Room List */}

      <div
        style={{
          overflowY: "auto",
          flex: 1,
          padding: "0 10px",
        }}
      >
        {rooms
          .filter((room) =>
            room.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((room) => (
            <div
              key={room.id}
              onClick={() => setSelectedRoom(room.name)}
              style={{
                background:
                  selectedRoom === room.name
                    ? "#00a884"
                    : "transparent",

                color: "white",
                marginBottom: "10px",
                borderRadius: "12px",
                padding: "15px",
                cursor: "pointer",
                transition: ".3s",
              }}
            >
              💬 {room.name}
            </div>
          ))}
      </div>
    </div>
  );
}

export default RoomList;
