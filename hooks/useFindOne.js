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
    async getOneData(id) {
      setLoading(true);
      setError(null);
      try {
        if (url) {
          const data = await GET(url + "/" + id);

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
      if (router.isReady) {
        const id = router?.query?.slug[1];
        data.getOneData(id);
      }
    }
  }, [router.isReady]);

  return {
    data,
    loading,
    oneData,
    error,
    id: router?.query?.slug[1],
  };
};
