import "./Error.css"
import {useEffect, useState} from "react";

function Error({error, searchTerm}) {

  const [statusErrors, setStatusErrors] = useState("")

  useEffect(() => {
    if (error.response && error.response.status) {
      setStatusErrors(error.response.status);
    } else {
      setStatusErrors(error.message);
    }
  }, []);

  return (
    <div className="error-box">
      {console.log(statusErrors)}
      {statusErrors === 404 ? (
        <p>{searchTerm} bestaat niet. Probeer het opnieuw</p>
      ) : (
        <p>{statusErrors}</p>
      )}
    </div>
  );
}

export default Error;