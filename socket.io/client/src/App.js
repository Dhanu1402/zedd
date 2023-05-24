import io from 'socket.io-client';
import { useState } from 'react';
import Chat from './components/Chat';

// connecting frontend to backend
const socket = io('http://localhost:3001');

export default function App() {
  const [username, setUsername] = useState('');

  const [room, setRoom] = useState('');

  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      // emmiting an event to the server from frontend
      socket.emit('join_room', room);
      setShowChat(true);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center font-mono bg-blue-100 relative">
      <h1 className="absolute left-10 top-10 text-4xl text-gray-500 font-semibold">
        Chit Chat
      </h1>
      {!showChat ? (
        <div className="flex flex-col items-center space-y-6">
          <h3 className="font-semibold text-center text-gray-400 space-y-4 text-2xl">
            Join room to chat
          </h3>
          <input
            type="text"
            placeholder="Name"
            className="rounded-sm border-2 border-black p-2 outline-none"
            onChange={(ev) => {
              setUsername(ev.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID"
            className="rounded-sm border-2 border-black p-2 outline-none"
            onChange={(ev) => {
              setRoom(ev.target.value);
            }}
          />
          <h3 className="font-semibold text-center text-gray-400 space-y-4">
            Enter the same room ID
          </h3>
          <button
            onClick={joinRoom}
            className="border-2 rounded-md h-10 w-20 bg-blue-400 text-white"
          >
            Join
          </button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}
