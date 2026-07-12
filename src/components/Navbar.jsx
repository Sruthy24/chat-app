import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Firebase Chat</h2>

      <button onClick={() => signOut(auth)}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
