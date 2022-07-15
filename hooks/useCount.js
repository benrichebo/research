import { useEffect, useState } from "react";
import { GET } from "../functions/GET";
import { useStorage } from "./useStorage";

export const useCount = (type, url) => {
  const { sessionStorage } = useStorage("session");

  const [oneData, setOneData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const count = {
    async getOneData() {
      setLoading(true);
      setError(null);
      try {
        const data = await GET(url);
        setLoading(false);
        if (data.msg) {
          setError(data.msg);
        } else {
          if (data?.count) {
            setOneData(data);
            sessionStorage.setItem(type, data);
          }
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    },
  };

  useEffect(() => {
    if (type?.includes("one")) {
      const fetched = sessionStorage.getItem(type);
      if (fetched?.count) {
        setOneData(fetched?.count);
      } else {
        count.getOneData();
      }
    }
  }, []);

  return {
    count,
    loading,
    oneData,
    error,
  };
};
