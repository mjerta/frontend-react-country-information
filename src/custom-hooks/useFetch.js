import {useEffect, useState} from "react";
import axios from "axios";

function useFetch(url, params) {
  const [data, setFlagData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFlagData() {
      setError("");
      setLoading(true);
      try {
        const response = await axios.get(url, {
          params
        });
        setFlagData(response.data.sort((a, b) => a.population - b.population));
        console.log(response);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false)
      }

    }

    void fetchFlagData();

  }, []);

  return {data, error, loading};

}

export default useFetch;