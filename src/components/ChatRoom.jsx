.chat-room{
    flex:1;
    display:flex;
    flex-direction:column;
    height:100vh;
    background:#efeae2;
    background-image:url("https://www.transparenttextures.com/patterns/cream-paper.png");
}

.chat-header{
    height:70px;
    background:white;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 25px;
    border-bottom:1px solid #ddd;
    box-shadow:0 2px 6px rgba(0,0,0,.08);
    flex-shrink:0;
}

.chat-title{
    display:flex;
    align-items:center;
    gap:15px;
}

.chat-title img{
    width:48px;
    height:48px;
    border-radius:50%;
}

.chat-title h3{
    margin:0;
}

.chat-title p{
    color:#1fa855;
    font-size:14px;
}

.messages{
    flex:1;
    overflow-y:auto;
    padding:30px;
    display:flex;
    flex-direction:column;
    gap:18px;
}
