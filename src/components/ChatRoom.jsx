import { useEffect, useRef, useState } from "react";
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
  const bottomRef = useRef(null);

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

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="chat-room">

      <div className="chat-header">

        <div>
          <h3>💬 Chat Room</h3>
          <span className="online-status">
            Online
          </span>
        </div>

      </div>

      <div className="messages">

        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
          />
        ))}

        <div ref={bottomRef}></div>

      </div>

      <SendMessage roomId={roomId} />

    </div>
  );
}

export default ChatRoom;
