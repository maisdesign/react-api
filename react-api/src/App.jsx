import { useEffect, useState } from 'react'
import axios from 'axios'
import PersonCard from './components/PersonCard.jsx'
import ListSelection from './components/ListSelection.jsx'

function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);
  const [selected, setSelected] = useState('actresses');
  const [apiError, setApiError] = useState(null);


  function fetchActresses() {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((act) => { setActresses(act.data); }).catch(() => setApiError('Actresses casting is not ready, please wait'))
  }

  function fetchActors() {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then((act) => { setActors(act.data); }).catch(() => setApiError('Actors casting is not ready, please wait'))
  }

  useEffect(fetchActresses, [])
  useEffect(fetchActors, [])
  const newActors = actors.map((actor) => ({ ...actor, gender: 'male' }))
  const newActresses = actresses.map((actress) => ({ ...actress, gender: 'female' }))
  const academy = ([...newActors, ...newActresses]);


  function getList(select) {
    if (select === 'actresses') {
      return actresses
    } else if (select === 'actors') {
      return actors
    } else {
      return academy
    }
  }

  return (
    <div className="container">
      <h1>react-api</h1>
      <ListSelection setSelected={setSelected} />
      <div className="row">
        {(!apiError) ?
          (getList(selected).map(person => (
            <PersonCard key={(person.gender) ? (person.gender + person.id) : (person.id)} person={person} />
          ))) : <div className="btn btn-danger">{apiError}</div>
        }
      </div>
    </div>
  )
}

export default App
