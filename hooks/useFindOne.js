import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GET } from "../functions/GET";
import { useStorage } from "./useStorage";

export const useFindOne = (type, url) => {
  const { sessionStorage } = useStorage("session");
  const router = useRouter();

  const [oneData, setOneData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const data = {
    async getOneData() {
      setLoading(true);
      setError(null);
      try {
        if (url) {
          const data = await GET(url + "/" + router?.query?.slug[1]);

          if (data.msg) {
            setError(data.msg);
          } else {
            if (data?._id) {
              setOneData(data);
              sessionStorage.setItem(type, data);
            }
          }
          setLoading(false);
        } else {
          console.log("no url");
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    },
  };

  useEffect(() => {
    if (type?.includes("one")) {
      data.getOneData();
    }
  }, []);

  return {
    data,
    loading,
    oneData,
    error,
    id: router?.query?.slug[1],
  };
};
