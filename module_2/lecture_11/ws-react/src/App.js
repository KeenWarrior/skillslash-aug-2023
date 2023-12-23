import logo from './logo.svg';
import './App.css';
import ChatApp from './ChatApp';
import { createContext, useState } from 'react';

export const SocketContext = createContext();

function App() {

  const [socket, setSocket] = useState();

  return (
    <div className="App">
      <SocketContext.Provider value={{socket, setSocket}}>
        <ChatApp />
      </SocketContext.Provider>
    </div>
  );
}

export default App;
