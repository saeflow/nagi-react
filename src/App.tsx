import { useState } from 'react'
import nagi_Icon from '/nagi.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [footballerTrigger, setFootballerTriggger] = useState(false);
  const [isLogin, setIsLogin]= useState(false);
  const footballers: string[] = ['Barou', 'Shidou', 'Sae', 'Isagi', 'Rin', 'Bachira']
  const goalsScored: number[] = [20, 18, 7, 19, 19, 15]

  const protArr: number[] = []


  for (let i = 0; i < 20; i++) {
    protArr.push(i)
  }

  const incrementedNumbers = protArr.map(number => (
    <li key={number}>{number}</li>
  ))

  return (
    <>
      {/* <div>hi</div> */}

      {/* <ul>{incrementedNumbers}</ul> */}

      <img
        src={nagi_Icon}
        className="logo w-[300px] h-auto border-2 border-blue-500"
        alt="Nagi"
      />

      <h1>Nagi Seishirō</h1>

      <div className="card">
        <button onClick={() => setCount(c => c + 1)}>
          Goals scored: {count}
        </button>


      </div>
      <button onClick={() => setFootballerTriggger(prev => !prev)}>
          Click to see the best footballers around.
        </button>
          {!isLogin ? (
        <LoginForm onLogin={() => setIsLogin(true)} />
      ) : (
        <HelloWorldContainer />
      )}

        {footballerTrigger && (
          <>
            <div>Best footballers around:</div>
            <List footballerList={footballers} goalsScored={goalsScored} />
          </>
        )}

    </>
  )
}

function HelloWorldContainer() {
  return <h1>Hello World</h1>;
}

interface loginPropType { onLogin: () => void }

function LoginForm({ onLogin }: loginPropType ) {
  return (
    <form>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button
        type="button"
        onClick={onLogin}
      >
        Login
      </button>
    </form>
  );
}




interface ListItemInterface {
  footballer: string
  goalsScored: number
}

function ListItem({ footballer, goalsScored }: ListItemInterface) {
  return <li>{footballer} scored {goalsScored}</li>
}

interface ListProps {
  footballerList: string[]
  goalsScored: number[]
}

function List({ footballerList, goalsScored }: ListProps) {
  console.log(footballerList);
  console.log(goalsScored);

  return (
    <ul>
      {footballerList.map((footballer, index) => (
        <ListItem
          key={footballer}
          footballer={footballer}
          goalsScored={goalsScored[index]}
        />
      ))}
    </ul>
  );
}

export default App
