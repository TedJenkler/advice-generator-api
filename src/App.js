import './App.css';
import { useEffect, useState } from 'react';
import FrontendMentorFooter from './Components/FrontendMentorFooter';
import dice from "./images/icon-dice.svg"

function App() {

  const [id, setID] = useState("Loading");
  const [advice, setAdvice] = useState("Loading");

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
      }
      );
  },[]);

  return (
    <>
    <main className='container'>
      <div className='row row1'>
        <h1 className='id'>Advice #{id}</h1>
        <p className='advice'>{'"' + advice + '"'}</p>
      </div>
      <div className='row row2'>
        <button onClick={handleClick} className='button'><img className='dice' src={dice} alt='dice'></img></button>
      </div>
    </main>
    <FrontendMentorFooter></FrontendMentorFooter>
    </>
  );
}

export default App;
