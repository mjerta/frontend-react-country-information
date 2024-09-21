import Flag from "../../components/flag/Flag.jsx";
import useFetch from "../../custom-hooks/useFetch.js";

function WorldFlags() {

  const {
    data: flagData, error, loading
  } = useFetch("https://restcountries.com/v3.1/all",
    {fields: 'name,flags,population,continents'}
  )
  return (
    <>
      <header>
        <div className="header-image"></div>
      </header>
      <div className="box-title">
        <div className="box-title-inside">
          {
            error && <h1 className="error">{error}</h1>
          }
          {/*<button onClick={fetchFlagData}>button</button>*/}
          <h1>World Regions</h1>
        </div>
      </div>
      {
        !loading ? (
            <div className="flag-box-wrapper">
              {flagData.map((flag) => (
                <Flag
                  key={flag.name.common}
                  className="flag-box"
                  imgClassName="flag"
                  titleClassName={[...flag.continents, "flag-title"].join(" ").toLowerCase()}
                  flagImg={flag.flags.png}
                  title={flag.name.common}
                  population={flag.population}
                  populationClassName={[...flag.continents, "population"].join(" ").toLowerCase()}
                />
              ))}
            </div>
          )
          :
          (
            <h1>Loading</h1>
          )
      }
    </>
  )
}

export default WorldFlags;