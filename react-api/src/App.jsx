import { useEffect, useState } from 'react'
import axios from 'axios'
import ActressCard from './components/ActressCard.jsx'

function App() {
  const [actresses, setActresses] = useState([])
  function fetchActresses() {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((act) => { setActresses(act.data); console.log(act) })
  }

  useEffect(fetchActresses, [])
  return (
    <div>
      <h1>react-api</h1>
      {actresses.map(actress => <ul key={actress.id} className="card actress-card">
        {<ActressCard actress={actress} />}
      </ul>)}
    </div>
  )
}

export default App
