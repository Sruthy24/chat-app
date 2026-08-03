import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import "./Login.css";

function Login() {
const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Login Success", result.user);
  } catch (error) {
    console.error(error);
    alert(`Error Code: ${error.code}\n\n${error.message}`);
  }
};

  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="overlay">
          <h1>ConnectHub</h1>
          <p>
            Stay connected with your friends and teams through secure,
            real-time conversations.
          </p>

          <div className="features">
            <div>💬 Create Unlimited Chat Rooms</div>
            <div>⚡ Instant Messaging</div>
            <div>🔒 Secure Google Authentication</div>
            <div>☁ Cloud Powered by Firebase</div>
          </div>
        </div>
      </div>

      <div className="right-panel">
        <div className="login-card">

          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="google-logo"
          />

          <h2>Welcome Back</h2>

          <p className="subtitle">
            Continue with your Google account
          </p>

          <button
            className="google-button"
            onClick={handleGoogleLogin}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />

            Continue with Google
          </button>

          <p className="footer-text">
            Powered by React.js & Firebase
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;
