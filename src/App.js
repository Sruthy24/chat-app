import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RoomList from "./components/RoomList";

import "./App.css";

function App() {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="app">
      <Navbar />
      <RoomList />
    </div>
  );
}

export default App;
