import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  //value, function

 // let counter = 15;

  const addValue = () => {
    // if(counter < 20) {
    //   setCounter(counter + 1)
    // }

    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // but in this the update will work only be increasing one number 
    // if we want to apply the update by 4 then we use the callback function inside the setcounter to increase the value by 4 

    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);

  }

  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    }
  }
  
  return (
    <>
        <h1>Chai aur react</h1>
        <h2>Counter value: {counter}</h2>

        <button onClick={addValue}>Add Value {counter}</button>
        <br />
        <button onClick={removeValue}> Remove value {counter}</button>
        <p>Footer : {counter}</p>
    </>
  )
}

export default App
