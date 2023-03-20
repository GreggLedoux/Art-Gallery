import { useState, useEffect } from 'react'
import './App.css';
import Gallery from './components/Gallery'
import ButtonBar from './components/ButtonBar'

function App() {
  let [artDetails, setArtDetails] = useState({})
  let [objectId, setObjectId] = useState(12770)

  useEffect(() => {
    document.title="Welcome to Artworld";
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
    .then(response => response.json())
    .then(resartDetails => setArtDetails(resartDetails))
  }, [objectId])

  const handleIterate = (e) => {
    setObjectId(objectId + Number(e.target.value))
  }

  const displayImage = () => {
    if(!artDetails.primaryImage) {
      return (
        <h2>No Image!</h2>
      )
    }
    return (
      <Gallery objectImg={artDetails.primaryImage} title={artDetails.title} />
    )
  }

  return (
    <div className="App">
      <h1>{artDetails.title}</h1>
      <div style={{'width': '100%'}}>
        {displayImage()}
      </div>
      <ButtonBar handleIterate={handleIterate} />
    </div>
  );
}

export default App;



   
