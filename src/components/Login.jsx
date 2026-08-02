import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {

  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>💬 ChatSphere</h1>

        <p>
          Create chat rooms, connect with friends and
          communicate in real time.
        </p>

        <button className="google-btn" onClick={signIn}>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
          />

          Continue with Google

        </button>

      </div>

    </div>
  );
}

export default Login;
