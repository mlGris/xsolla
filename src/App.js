import React, { useState } from 'react';
import BodyEvents from './components/BodyEvents';
import Filters from './components/Filters';
import NameApp from './components/NameApp';
import './styles/App.css';

function App() {
   const [events, setEvents] = useState([
    {
      "id": "01",
      "name": "Rave Autumn",
      "date": "14.09.2019",
      "city": "Amsterdam",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/826adbf1a19ba19e6ba9af9308d2b309.png"
    },
    {
      "id": "02",
      "name": "Best of 2019",
      "date": "20.09.2019",
      "city": "Berlin",
      "genre": "Mixed",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/ec3917285ef4db8532c8a9cd9a2112ce.png"
    },
    {
      "id": "03",
      "name": "Faderhead",
      "date": "10.11.2019",
      "city": "Rim",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/53486baba5ec9d256ce20816a3e54e51.png"
    },
    {
      "id": "04",
      "name": "Purple Fog Side",
      "date": "05.06.2019",
      "city": "Berlin",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/e1baa378009391210cc0e64f65c7784e.png"
    },
   ])
  return (
    <div className="App">
      <NameApp />
      <Filters events={events} />
      <BodyEvents events={events} />
    </div>
  );
}

export default App;
