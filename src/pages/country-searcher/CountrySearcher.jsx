import {useState} from "react";
import convertToMillion from "../../helper-functions/convertToMillion.js";
import useCountryInformation
  from "../../custom-hooks/useFetchCountryInformation.js";
import SearchBox from "../../components/search-box/SearchBox.jsx";
import CountryCard from "../../components/country-card/CountryCard.jsx";
import Error from "../../components/error/Error.jsx";
import "../../App.css"
import "./CountrySearcher.css"

function CountrySearcher() {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermConfirmed, setSearchTermConfirmed] = useState("");
  const {
    loading,
    error,
    countryData,
    neigbourCountries,
    fetchCountryInformation
  } = useCountryInformation();

  function handleOnClick(e) {
    e.preventDefault();
    setSearchTermConfirmed(searchTerm);
    void fetchCountryInformation(searchTerm);
    e.target.reset();
  }

  function handleOnChange(e) {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <header>
        <div className="countrysearcher-image header-image"></div>
      </header>
      <div className="searchbox-card">
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
          !loading ?

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

              <h1 className="center-header">Enter your choise</h1>

            :

            <h1 className="center-header">Loading</h1>

        }
      </div>
    </>
  )
}

export default CountrySearcher;