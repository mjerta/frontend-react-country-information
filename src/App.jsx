import './App.css';
import Flag from "./components/Flag.jsx";
import axios from "axios";
import {useState} from "react";

function App() {

  const [flagData, setFlagData] = useState([]);

  async function fetchFlagData() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags,population,continents");
      setFlagData(response.data.sort((a, b) => a.population - b.population));
      console.log(response);
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <>
      <div className="flag-wrapper">
        <header>
        </header>
        <div className="box-title">
          <div className="box-title-inside">
            <button onClick={fetchFlagData}>button</button>
            <h1>World Regions</h1>
          </div>
        </div>
        <div className="flag-box-wrapper">
          {flagData.map((flag) => (
            <Flag
              key={flag.name.common}
              className="flag-box"
              imgClassName="flag"
              titleClassName={[...flag.continents].join(" ").toLowerCase()}
              flagImg={flag.flags.png}
              title={flag.name.common}
              population={flag.population}
            />

          ))}
        </div>
      </div>
    </>
  )
}

export default App
