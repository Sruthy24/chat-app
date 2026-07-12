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

    return () => unsubscribe();
  }, [roomId]);

  return (
    <div className="chat-room">
      <div className="messages">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
      </div>

      <SendMessage roomId={roomId} />
    </div>
  );
}

export default ChatRoom;
