import React from 'react';
import axios from 'axios';
const App = () => {
  const handleClick = async () => {
    // const users = await axios.get('localhost:3000/v1/users');
    // console.log('🚀 ~ file: App.tsx ~ line 6 ~ handleClick ~ users', users);
    axios.get('http://localhost:3000/v1/users').then((res) => {
      console.log('🚀 ~ file: App.tsx ~ line 9 ~ .then ~ res', res);
    });
  };
  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={handleClick}>button</button>
    </div>
  );
};

export default App;
