function Message({ message }) {

  return (

    <div className="message">

      <img
        src={message.photoURL}
        alt=""
        width="40"
      />

      <div>

        <h4>{message.displayName}</h4>

        <p>{message.text}</p>

      </div>

    </div>

  );

}

export default Message;
