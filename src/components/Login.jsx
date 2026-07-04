import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <h1>React Firebase Chat</h1>

      <button onClick={handleLogin}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
