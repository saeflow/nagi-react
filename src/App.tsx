  import { useState } from 'react'
  import nagi_Icon from '/nagi_icon.jpg'
  import './App.css'

  function App() {
    const [count, setCount] = useState(0)

    return (
      <>
       
         <img src={nagi_Icon} className="logo w-[300px] h-auto" alt="Nagi" /> 

        <h1>Nagi Seishirō</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
          Goals scored: {count}
          </button>
        </div>
      </>
    )
  }

  export default App
