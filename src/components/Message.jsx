import { auth } from "../firebase";

function Message({ message }) {

  const currentUser = auth.currentUser;

  const isMine =
    currentUser?.uid === message.uid;

  return (

    <div
      className={
        isMine
          ? "message-row mine"
          : "message-row"
      }
    >

      {!isMine && (

        <img
          src={message.photoURL}
          alt=""
          className="avatar"
        />

      )}

      <div
        className={
          isMine
            ? "message mine-message"
            : "message other-message"
        }
      >

        {!isMine && (
          <h5>{message.name}</h5>
        )}

        <p>{message.text}</p>

      </div>

    </div>

  );
}

export default Message;
