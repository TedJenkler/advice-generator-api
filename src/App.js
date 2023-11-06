import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [id, setID] = useState();
  const [advice, setAdvice] = useState();

  const handleClick = async () => {
    try {
        const data = await (await fetch('https://api.adviceslip.com/advice')).json()
        setID(data.slip.id)
        setAdvice(data.slip.advice)
    } catch (err) {
        console.log("API seems to be down")
    }
}

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        setID(data.slip.id)
        setAdvice(data.slip.advice)
        console.log(data.slip)
      }
      );
  },[]);

  return (
    <main className='container'>
      <div className='row'>
        <h1>Advice #{id}</h1>
        <p>{advice}</p>
      </div>
      <div className='row'>
        <button onClick={handleClick} className='btn'>dice</button>
      </div>
    </main>
  );
}

export default App;
