import { useState } from "react";
import { auth, db } from "../firebase";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

function SendMessage({ room }) {

  const [text, setText] = useState("");

  const sendMessage = async (e) => {

    e.preventDefault();

    if (text.trim() === "") return;

    const user = auth.currentUser;

    try {

      await addDoc(
        collection(db, "rooms", room, "messages"),
        {
          text: text,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: serverTimestamp(),
        }
      );

      setText("");

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <form className="send" onSubmit={sendMessage}>

      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">
        Send
      </button>

    </form>

  );

}

export default SendMessage;
