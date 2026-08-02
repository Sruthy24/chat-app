import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  const user = auth.currentUser;

  return (
    <nav className="navbar">

      <div className="nav-logo">
        💬 ConnectHub
      </div>

      <div className="nav-user">

        <img
          src={user?.photoURL}
          alt="profile"
          className="profile-image"
        />

        <div className="user-details">
          <h4>{user?.displayName}</h4>
          <span>🟢 Online</span>
        </div>

        <button
          className="logout-btn"
          onClick={() => signOut(auth)}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
