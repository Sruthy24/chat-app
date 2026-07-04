import { useEffect, useRef, useState } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot
} from "firebase/firestore";

import { db } from "../firebase";

import Message from "./Message";
import SendMessage from "./SendMessage";

function ChatRoom({ room }) {

  const [messages, setMessages] = useState([]);

  const bottomRef = useRef();

  useEffect(() => {

    const q = query(
      collection(db, "rooms", room, "messages"),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {

      const list = [];

      snapshot.forEach((doc) => {

        list.push({
          id: doc.id,
          ...doc.data(),
        });

      });

      setMessages(list);

      setTimeout(() => {
        bottomRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);

    });

    return () => unsubscribe();

  }, [room]);

  return (

    <div className="chat">

      <h2>{room}</h2>

      <div className="messages">

        {messages.map((msg) => (
          <Message
            key={msg.id}
            message={msg}
          />
        ))}

        <div ref={bottomRef}></div>

      </div>

      <SendMessage room={room} />

    </div>

  );

}

export default ChatRoom;
