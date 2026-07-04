import { auth } from "../firebase";

function Message({ message }) {

  const currentUser = auth.currentUser;

  const isOwnMessage = currentUser?.uid === message.uid;

  return (

    <div className={isOwnMessage ? "message own" : "message"}>

      <img
        src={
          message.photoURL ||
          "https://via.placeholder.com/40"
        }
        alt="Profile"
      />

      <div className="message-content">

        <h4>{message.displayName}</h4>

        <p>{message.text}</p>

      </div>

    </div>

  );

}

export default Message;
