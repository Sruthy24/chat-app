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
        createdAt: serverTimestamp(),
        uid: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photoURL: auth.currentUser.photoURL,
      }
    );

    setText("");
  };

  return (
    <form
      className="send-message"
      onSubmit={sendMessage}
    >
      <button
        type="button"
        style={{
          background: "transparent",
          border: "none",
          fontSize: "26px",
          cursor: "pointer",
          color: "#666",
        }}
      >
        😊
      </button>

      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        type="submit"
        style={{
          background: "#00a884",
          border: "none",
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          color: "white",
          fontSize: "22px",
          cursor: "pointer",
        }}
      >
        ➤
      </button>
    </form>
  );
}

export default SendMessage;
