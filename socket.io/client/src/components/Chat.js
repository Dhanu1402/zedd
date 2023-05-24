import React, { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

export default function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState('');

  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      };

      // emmit a socket message and this message through it
      await socket.emit('send_message', messageData);

      // to display our message also in frontend
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage('');
    }
  };

  // listening for messages from backend
  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="space-y-4">
      <div className="border border-black h-10 items-center p-2 bg-black text-white flex">
        <p className="">Live Chat</p>
      </div>
      <div className="chat-body border border-black h-80">
        <ScrollToBottom className="w-full h-full overflow-y-scroll overflow-x-hidden">
          {messageList.map((messageContent) => {
            return (
              <div
                className="h-auto p-2 flex"
                id={username === messageContent.author ? 'you' : 'other'}
              >
                <div>
                  <div className="message-content w-auto h-auto min-h-[40px] max-w-[120px] bg-[#43a047] rounded-sm text-white flex items-center mx-2 px-2">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta flex text-sm space-x-2 px-2 text-gray-400">
                    <p>{messageContent.time}</p>
                    <p className="ml-2.5">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="h-10 flex">
        <input
          type="text"
          value={currentMessage}
          placeholder="Type a message"
          className="rounded-sm border-2 border-black p-2 outline-none"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === 'Enter' && sendMessage();
          }}
        />
        <button
          onClick={sendMessage}
          className="p-2 rounded-sm border-2 border-black"
        >
          &#9658;
        </button>
      </div>
    </div>
  );
}
