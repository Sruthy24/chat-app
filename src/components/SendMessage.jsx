import { useState } from "react";

function SendMessage({ room }) {

  const [text, setText] = useState("");

  const send = (e) => {

    e.preventDefault();

    if (!text) return;

    console.log("Room:", room);

    console.log(text);

    setText("");

  };

  return (

    <form onSubmit={send} className="send">

      <input
        type="text"
        placeholder="Type message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button>
        Send
      </button>

    </form>

  );

}

export default SendMessage;
