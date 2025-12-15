import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
      // variable name , referenceholder
  let [counter, setCounter] =useState(15)


  // let counter=5;
  const AddValue=()=>{
    console.log('value added',Math.random());
    setCounter(counter+1)
  }

  const RemoveValue=()=>{
    console.log('remove value', Math.random())
    setCounter(counter-1)
  }
  return (
    <>

     <h1>hello logo</h1>
     <h2> counter value :{counter}</h2>
     <button onClick={RemoveValue} >Remove value</button>
    <br /> <br />

     <button onClick={AddValue}>Add value</button>

    </>
  )
}

export default App
