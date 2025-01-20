import { useState, useEffect } from "react";
// import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());
// export default function useFetch(url) {
//   const { data, isLoading, error } = useSWR(url, fetcher);

//   return { data, isLoading, error };
// }

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [data, isLoading, error]);
  return { data, isLoading, error };
}
