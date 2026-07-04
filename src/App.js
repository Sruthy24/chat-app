import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RoomList from "./components/RoomList";

import "./App.css";

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? (
        <>
          <Navbar />
          <RoomList />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
