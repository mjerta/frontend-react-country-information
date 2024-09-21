import {useState} from "react";
import axios from "axios";

const useCountryInformation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [neigbourCountries, setNeigbourCountries] = useState([]);

  const fetchCountryInformation = async (country) => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
      const responseObject = response.data[0];
      setCountryData(responseObject);

      if (responseObject.borders && responseObject.borders.length > 0) {
        const codes = responseObject.borders.join(",");
        const responseExtra = await axios.get(`https://restcountries.com/v3.1/alpha `, {
          codes: codes
        });
        setNeigbourCountries(responseExtra.data);
      }
    } catch (e) {
      setError(e.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    countryData,
    neigbourCountries,
    fetchCountryInformation
  };
};

export default useCountryInformation;
