import { auth } from "../firebase";

function Message({ message }) {
  const isMine = auth.currentUser?.uid === message.uid;

  return (
    <div className={isMine ? "my-message" : "other-message"}>
      <strong>{message.name}</strong>
      <p>{message.text}</p>
    </div>
  );
}

export default Message;
