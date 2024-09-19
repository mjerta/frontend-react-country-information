import React from "react";
import "./flag.css"

function Flag({flagImg, title, population, className, imgClassName, titleClassName}) {
  const [loaded,setLoaded] = React.useState(false);
  return (
    <div className={className}>
      <div className="above">
        <img
          className={imgClassName}
          src={flagImg} alt=""
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
          onLoad={() => setLoaded(true)}
        />
        <h3 className={titleClassName}>{title}</h3>
      </div>
      <div className="below">
        <p>Has a population of {population} people.</p>
      </div>
    </div>
  )
}

export default Flag;