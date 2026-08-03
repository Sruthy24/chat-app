import { auth } from "../firebase";

function Message({ message }) {
  const isMe = auth.currentUser?.uid === message.uid;

  const time = message.createdAt?.seconds
    ? new Date(message.createdAt.seconds * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isMe ? "flex-end" : "flex-start",
        marginBottom: "18px",
      }}
    >
      {!isMe && (
        <img
          src={message.photoURL}
          alt=""
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "10px",
          }}
        />
      )}

      <div
        style={{
          background: isMe ? "#d9fdd3" : "#ffffff",
          padding: "12px 16px",
          borderRadius: "18px",
          maxWidth: "65%",
          boxShadow: "0 3px 8px rgba(0,0,0,.1)",
          wordBreak: "break-word",
        }}
      >
        {!isMe && (
          <div
            style={{
              color: "#008069",
              fontWeight: "bold",
              marginBottom: "6px",
            }}
          >
            {message.name}
          </div>
        )}

        <div
          style={{
            fontSize: "16px",
          }}
        >
          {message.text}
        </div>

        <div
          style={{
            textAlign: "right",
            fontSize: "12px",
            color: "#777",
            marginTop: "5px",
          }}
        >
          {time}
        </div>
      </div>
    </div>
  );
}

export default Message;
