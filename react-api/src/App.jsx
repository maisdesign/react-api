import { useEffect, useState } from 'react'
import axios from 'axios'
import PersonCard from './components/PersonCard.jsx'
import ListSelection from './components/ListSelection.jsx'

function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);
  const [selected, setSelected] = useState('actresses');


  function fetchActresses() {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((act) => { setActresses(act.data); })
  }

  function fetchActors() {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then((act) => { setActors(act.data); })
  }

  useEffect(fetchActresses, [])
  useEffect(fetchActors, [])
  const newActors = actors.map((actor) => ({ ...actor, gender: 'male' }))
  const newActresses = actresses.map((actress) => ({ ...actress, gender: 'female' }))
  const academy = ([...newActors, ...newActresses]);


  function getList(select) {
    if (select === 'actresses') {
      console.log(academy)
      return actresses
    } else if (select === 'actors') {
      return actors
    } else {
      console.log('Se scelgo both' + academy)
      return academy
    }
  }

  return (
    <div className="container">
      <h1>react-api</h1>
      <ListSelection setSelected={setSelected} />
      {(getList(selected).map(person => (
        <PersonCard key={person.gender + person.id} person={person} />
      )))}


    </div>
  )
}

export default App
