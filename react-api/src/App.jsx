import { useEffect, useState } from 'react'
import axios from 'axios'
import ActressCard from './components/ActressCard.jsx'

function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);
  function fetchActresses() {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((act) => { setActresses(act.data); })
  }

  function fetchActors() {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then((act) => { setActors(act.data); })
  }

  useEffect(fetchActresses, [])
  useEffect(fetchActors, [])
  return (
    <div className="container">
      <h1>react-api</h1>

      {actresses.map(actress => (
        <ActressCard key={actress.id} actress={actress} />
      ))}

      {actors.map(actor => (
        <ActressCard key={actor.id} actress={actor} />
      ))}


    </div>
  )
}

export default App
