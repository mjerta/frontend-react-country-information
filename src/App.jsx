import './App.css';
import WorldFlags from "./pages/world-flags/WorldFlags.jsx";
import {Route, Routes} from "react-router-dom";
import Navigation from "./components/navigation/Navigation.jsx";
import CountrySearcher from "./pages/country-searcher/CountrySearcher.jsx";


function App() {
  return (
    <>
      <div className="flag-wrapper">
        <Navigation/>
        <Routes>
          <Route path="/" element={<WorldFlags/>}/>
          <Route path="/country-searcher" element={<CountrySearcher/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
