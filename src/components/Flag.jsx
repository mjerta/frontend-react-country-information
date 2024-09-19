function Flag({flagImg, title, population, className}) {
  return (
    <div className="flag-box">
      <div className="above">
        <img className={className} src={flagImg} alt=""/>
        <h3>{title}</h3>
      </div>
      <div className="below">
        <p>Has a population of {population} people.</p>
      </div>
    </div>
  )
}

export default Flag;