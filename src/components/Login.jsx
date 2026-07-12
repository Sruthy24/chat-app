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
    <div className="login">
      <button onClick={signIn}>Sign in with Google</button>
    </div>
  );
}

export default Login;
