import { useEffect, useState } from 'react'
import nagi_Icon from '/nagi_icon.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const footballers: string[] = ['Barou', 'Shidou', 'Sae', 'Isagi', 'Rin', 'Bachira']
  const shoe: number = 24
  const uuid = self.crypto.randomUUID();

  function alabama(hotpocket: number){
    if(hotpocket >= 5){
      console.log('i like hotpockets')
    } else {
      console.log(`not enough hotpockets, here, have an id: ${uuid}`)
    }
  }

  useEffect(() => {
    alabama(4)
  }, [])

  const protArr: number[] = []
  for (let i = -1; i < 20; i++) {
   protArr.push(i)
  }

  const nickg: any= <div>hi</div>

  const incrementedNumbers = protArr.map(number => (
  <li key={number}>{number}</li>
))

  return (
    <>
    {nickg}
    <ul>{incrementedNumbers}</ul>
      <img src={nagi_Icon} className="logo w-[300px] h-auto border-2 border-blue-500" alt="Nagi" />

      <h1>Nagi Seishirō</h1>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          Goals scored: {count}
        </button>

        <div>Best footballer around:</div>
        <List footballerList={footballers} footballerShoe={shoe} />
      </div>
    </>
  )
}

interface ListItemInterface { footballer: string}
function ListItem( {footballer}: ListItemInterface) {
  return <li>{footballer}</li>
}

interface ListProps {
  footballerList: string[]
  footballerShoe?: number
}
function List({ footballerList }: ListProps) {
  return (
    <ul>
      {footballerList.map((footballer) => (
        <ListItem key={footballer} footballer={footballer} />
      ))}
    </ul>
  )
}

export default App
