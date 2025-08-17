import { useState, useEffect } from "react";
import axios from "axios";
import env from "../env";
export default function useApi(url, method = "GET", body = null, headers = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        url: env.siteApi + url,
        method,
        data: body,
        headers,
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (method === "GET") {
      fetchData();
    }
  }, [url, method, body, headers]);

  return { data, loading, error, fetchData };
}

// const { data, loading, error, fetchData } = useApi(
//     "https://api.example.com/products",
//     "POST",
//     { name: "New Product", price: 100 }
//   );

// const { data, loading, error } = useApi("https://api.example.com/products");
