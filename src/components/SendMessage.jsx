import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../firebase";

function SendMessage({ roomId }) {
  const [text, setText] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    await addDoc(
      collection(db, "rooms", roomId, "messages"),
      {
        text,
        uid: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photoURL: auth.currentUser.photoURL,
        createdAt: serverTimestamp(),
      }
    );

    setText("");
  };

  return (
    <form className="send-message" onSubmit={sendMessage}>

      <button
        type="button"
        className="icon-btn"
      >
        😊
      </button>

      <input
        type="text"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="send-btn"
        type="submit"
      >
        ➤
      </button>

    </form>
  );
}

export default SendMessage;
