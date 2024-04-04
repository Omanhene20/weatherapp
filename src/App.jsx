import { useState } from 'react';
import Weather from './weather.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Weather />
      <div></div>
    </>
  );
}

export default App;
