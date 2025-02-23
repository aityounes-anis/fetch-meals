import axios from "axios";
import { useEffect, useState } from "react";

export const useFecth = ({ URL }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(URL);
        setData(response.data);
      } catch (error) {
        console.log(`ERROR_GET_MEAL_API_REQUEST | ${error.message}`);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [URL]);

  return { data, loading, error };
};
