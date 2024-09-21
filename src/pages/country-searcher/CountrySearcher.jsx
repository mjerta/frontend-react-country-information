import SearchBox from "../../components/search-box/SearchBox.jsx";
import CountryCard from "../../components/country-card/CountryCard.jsx";
import {useState} from "react";
import axios from "axios";
import convertToMillion from "../../helper-functions/convertToMillion.js";
import Error from "../../components/error/Error.jsx";

function CountrySearcher() {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermConfirmed, setSearchTermConfirmed] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [neigbourCountries, setNeigbourCountries] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchCountryInformation(country) {
    try {
      setLoading(true);
      setError("")
      const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
      const responseObject = response.data[0];
      setCountryData(responseObject);

      if (responseObject.borders && responseObject.borders.length > 0) {
        const codes = responseObject.borders.join(",");
        const responseExtra = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${codes}`);
        console.log(responseExtra.data);
        setNeigbourCountries(responseExtra.data);
      }

    } catch (e) {
      console.log(e);
      setError(e)
    } finally {
      setLoading(false);
    }
  }

  function handleOnClick(e) {
    console.log(e)
    setSearchTermConfirmed(searchTerm);
    void fetchCountryInformation(searchTermConfirmed);
  }

  function handleOnChange(e) {
      setSearchTerm(e.target.value)
  }

  return (
    <>
      {console.log(countryData)}
      <SearchBox
        handleOnClick={handleOnClick}
        handleOnChange={handleOnChange}
      />
      {error &&
        <Error
          searchTerm={searchTermConfirmed}
          error={error}
        />}
      {
        countryData ?
          <CountryCard
            capital={countryData.capital}
            countryImg={countryData.flags.svg}
            countryTitle={countryData.name.common}
            population={convertToMillion(countryData.population)}
            domains={countryData.tld.join(", ")}
            subAreaName={countryData.subregion}
            neigbouringCountry={
              neigbourCountries.length > 0 ?

                neigbourCountries.map((country) => country.name.common).join(", ")
                :
                "no countries"
            }
          />
          :
          <CountryCard
          />
      }
    </>
  )
}

export default CountrySearcher;