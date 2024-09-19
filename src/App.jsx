import './App.css';
import worldMap from "./assets/world_map.png";
import Flag from "./components/Flag.jsx";
import axios from "axios";
import {useState} from "react";

function App() {

  const [flagData, setFlagData] = useState([]);

  async function fetchFlagData() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags");
      setFlagData(response.data.sort((a, b) => a.name.common.toUpperCase().localeCompare(b.name.common.toUpperCase())));
      console.log(response);
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <>
      <div className="flag-wrapper">
        <header></header>
        <button onClick={fetchFlagData}>button</button>
        <h1>World Regions</h1>
        {flagData.map((flag) => (
          <Flag
            key={flag.name.common}
            className="flag"
            flagImg={flag.flags.png}
            title={flag.name.common}
            population={"population"}
          />

        ))}
      </div>
    </>
  )
}

export default App
