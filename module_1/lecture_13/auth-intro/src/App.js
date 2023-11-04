import logo from "./logo.svg";
import "./App.css";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebaseApp from "./utils/firebaseApp";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const auth = getAuth(firebaseApp);

  const handleAuthStateChanged = (user) => {
    setUser(user);
    console.log(user);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(handleAuthStateChanged);
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      {!user && <Login user={user} />}
      {user && (
        <div>
          <img src={user.photoURL} alt="" />
          <h1>{user.displayName}</h1>
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
    <div>
      <button
        onClick={() => {
          const googleAuthProvider = new GoogleAuthProvider();
          const auth = getAuth(firebaseApp);
          signInWithPopup(auth, googleAuthProvider);
        }}
      >
        Login
      </button>
    </div>
  );
}

export default App;
