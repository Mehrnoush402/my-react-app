
import React, { useState } from 'react'
import './App.css'
import ChildComponent from './ChildComponent';
const App = () => {
  console.log('app rerender');
  const [number, setNumber] = useState(0)
  return (
    <div>
      <div>
        <button onClick={() => setNumber(number + 1)}>

          number in app component :  {number}
        </button>
      </div>
      <ChildComponent num={number} />
    </div>
  )
}

export default App
