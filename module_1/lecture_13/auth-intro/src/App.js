import "./App.css";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import firebaseApp from "./utils/firebaseApp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ERROR, SUCCESS } from "./consts/authState";

function App() {
  const auth = getAuth(firebaseApp);
  const dispath = useDispatch();
  const { user, authState } = useSelector((state) => state.auth);

  const handleAuthStateChanged = (user) => {
    console.log(user);
    dispath({
      type: "SET_USER",
      payload: {
        user: user,
        authState: user ? SUCCESS : ERROR,
      },
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(handleAuthStateChanged);
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      {authState === "LOADING" && (
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/011/299/215/small/simple-loading-or-buffering-icon-design-png.png"
          className="App-logo"
          alt="logo"
        />
      )}
      {authState === ERROR && <Login />}
      {authState === SUCCESS && (
        <div>
          {/* <img src={user.photoURL} alt="" />
          <h1>{user.displayName}</h1> */}
          <h3>{user.email}</h3>
          <button
            onClick={() => {
              const auth = getAuth(firebaseApp);
              auth.signOut();
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

function Login({ user }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "300px",
      alignItems: "center",
    }}>
      <h1>Login</h1>
      <input id="email" type="email" placeholder="email" />
      <input id="password" type="password" placeholder="password" />
      <button
        onClick={() => {
          const auth = getAuth(firebaseApp);
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;
          signInWithEmailAndPassword(auth, email, password).then((user) => {
            console.log(user);
          });
        }}
      >
        Login
      </button>
      <button onClick={()=>{
            const provider = new GoogleAuthProvider();
            const auth = getAuth(firebaseApp);
            signInWithPopup(auth, provider)
          }}>
            Sign-in with Google
          </button>
    </div>
  );
}

export default App;
