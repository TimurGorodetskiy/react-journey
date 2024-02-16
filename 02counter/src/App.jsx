import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCounter] = useState(0);

  const addValue = () => {
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
  };

  const removeValue = () => {
    setCounter((prevCount) => prevCount - 1);
    setCounter((prevCount) => prevCount - 1);
    setCounter((prevCount) => prevCount - 1);
    setCounter((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h1>This is Timur's first ReactApp</h1>
      <h2>Counter value:{count}</h2>
      <button onClick={addValue}>add value</button>
      <button onClick={removeValue}>remove value</button>
      <p>footer:</p>
    </>
  );
}

export default App;
