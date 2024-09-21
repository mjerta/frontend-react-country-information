import './CountryCard.css'

function CountryCard({
                       countryImg,
                       countryTitle,
                       subAreaName,
                       capital,
                       domains,
                       population,
                       neigbouringCountry
                     }) {

  console.log(capital)

  return (
    <div className={"country-card"}>
      <div className={"country-card-heading"}>
        <div className="country-card-above">
          <img className="country-card-above-img" src={countryImg} alt=""/>
          <h3>
            {countryTitle}
          </h3>
        </div>
        <hr/>
        <div className="country-card-below">
          <p>
            {countryTitle} is situated in {subAreaName} and the capital
                           is {capital}.
                           It has a population of {population} million people
                           and it borders with {neigbouringCountry}.
                           Websites can be found on {domains} domain's
          </p>
        </div>
      </div>
    </div>
  )
}

export default CountryCard;