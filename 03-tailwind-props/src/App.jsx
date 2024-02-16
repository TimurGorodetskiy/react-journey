import { useState } from 'react';
import './App.css';
import Card from './components/Card';

const myObj = {
  name: 'Timur Gorodetskiy',
  post: 'Junior Engineer',
};

const myArr = [1, 2, 34];

function App() {
  return (
    <>
      <h1 className='text-3xl bg-gray-500 p-5  text-green-300 rounded-md'>
        Hello World
      </h1>
      <Card username={myObj.name} post={myArr} />
      <Card />
      <Card />
    </>
  );
}

export default App;
