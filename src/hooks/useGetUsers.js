import { useEffect, useState } from "react";
import axios from "axios";

export default function useGetUsers(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setUsers([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setTimeout(() => {
      axios
        .get(
          `https://randomuser.me/api/?page=${pageNumber}&results=10&seed=abc`,
          {}
        )
        .then((res) => {
          setUsers((prevUsers) => {
            return [...new Set([...prevUsers, ...res.data.results])];
          });
          setHasMore(res.data.results.length > 0);
          setLoading(false);
        })
        .catch((error) => {
          setError(true);
        });
    }, 1000);
  }, [pageNumber]);

  return { loading, error, users, hasMore };
}
