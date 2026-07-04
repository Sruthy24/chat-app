import SendMessage from "./SendMessage";

function ChatRoom({ room }) {

  return (

    <div className="chat">

      <h2>{room}</h2>

      <div className="messages">

        <p>Realtime messages will appear here.</p>

      </div>

      <SendMessage room={room} />

    </div>

  );
}

export default ChatRoom;
