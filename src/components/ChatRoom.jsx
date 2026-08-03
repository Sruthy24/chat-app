import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!roomId) return;

    const q = query(
      collection(db, "rooms", roomId, "messages"),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return unsubscribe;
  }, [roomId]);

  return (
    <>
      {/* Header */}

      <div className="chat-header">
        <div className="chat-left">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt=""
          />

          <div>
            <div className="chat-name">{roomId}</div>

            <div className="chat-status">
              🟢 Online
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: "24px",
            color: "#666",
            display: "flex",
            gap: "20px",
          }}
        >
          🔍 ⋮
        </div>
      </div>

      {/* Messages */}

      <div className="messages">
        {messages.map((msg) => (
          <Message
            key={msg.id}
            message={msg}
          />
        ))}
      </div>

      {/* Input */}

      <SendMessage roomId={roomId} />
    </>
  );
}

export default ChatRoom;
