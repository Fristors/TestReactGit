import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Buttons from './Buttons';

function App() {
  const [number, setNumber] = useState(0);
  const [timer, setTimer] = useState(0);
  /*const promiseTimer = new Promise((resolve) =>{
    setTimeout(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    resolve();
  });*/
  useEffect(() => {
    setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }, []);

  const addNum = useCallback(() => {
      setNumber(number + 1);
  }, [number]);
  const removeNum = useCallback(() => {
    setNumber(number - 1);
}, [number]);

  return (
    <div className="App">
      <h1>Заголовок</h1>
      <p>{timer}</p>
      <p>{number}</p>
      <Buttons addNum={addNum} removeNum={removeNum}/>
    </div>
  );
}

export default App;