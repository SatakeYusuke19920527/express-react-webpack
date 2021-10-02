import React, { useEffect, useState } from 'react';
import axios from 'axios';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://localhost:3001/v2/ws';
const App = () => {
  const [response, setResponse] = useState('');
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    console.log('🚀 ~ file: App.tsx ~ line 9 ~ useEffect ~ socket', socket);
    socket.on('FromAPI', (data) => {
      console.log('🚀 ~ file: App.tsx ~ line 10 ~ socket.on ~ data', data);
      setResponse(data);
    });
  }, []);
  const handleClick = async () => {
    axios.get('http://localhost:3001/v1/users').then((res) => {
      console.log('🚀 ~ file: App.tsx ~ line 9 ~ .then ~ res', res);
    });
  };
  return (
    <div>
      <h1>Hello world</h1>
      It's <time dateTime={response}>{response}</time>
      <button onClick={handleClick}>button</button>
    </div>
  );
};

export default App;
