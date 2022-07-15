import { useEffect, useState } from "react";
import { DELETE } from "../functions/DELETE";
import { GET } from "../functions/GET";
import { POST } from "../functions/POST";
import { PUT } from "../functions/PUT";
import { useStorage } from "./useStorage";

export const useCrud = (type, url) => {
  const { sessionStorage } = useStorage("session");

  const [allData, setAllData] = useState(null);
  const [oneData, setOneData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postError, setPostError] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const data = {
    async getAllData() {
      setLoading(true);
      setError(null);
      try {
        const data = await GET(url);
        setLoading(false);
        console.log("data", data);
        if (data?.msg && !data?.msg.includes("There are no")) {
          setError(data.msg);
        } else {
          sessionStorage.clearItem(type);
          if (data?.length > 0) {
            console.log("data2", data);
            sessionStorage.setItem(type, data);
            setAllData(data);
          } else {
            setAllData([]);
          }
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    },

    async getOneData(url) {
      setLoading(true);
      setError(null);
      try {
        const data = await GET(url);
        setLoading(false);
        if (data.msg) {
          setError(data.msg);
        } else {
          if (data?._id) {
            setOneData(data);
            sessionStorage.setItem(type, data);
          }
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    },

    //use it to get item for url in session
    async getOneUrlInSessionData() {
      setLoading(true);
      setError(null);
      try {
        let url = sessionStorage.getItem("url");
        const data = await GET(url);
        console.log("session-data", data);
        setLoading(false);
        if (data?.msg) {
          setError(data.msg);
        } else {
          if (data?._id) {
            setOneData(data);
          }
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    },

    async addData(body, url) {
      setError("");
      setPostLoading(true);
      try {
        const data = await POST(body, url);
        setPostLoading(false);
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
          this.getAllData();
        } else {
          setPostError(data.msg);
        }
      } catch (error) {
        setLoading(false);
        setPostError(error.message);
      }
    },

    async updateData(body, url) {
      setPostLoading(true);
      setPostError(null);
      try {
        const data = await PUT(body, url);
        setPostLoading(false);
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
          this.getAllData();
        } else {
          setPostError(data.msg);
        }
      } catch (error) {
        setPostLoading(false);
        setPostError(error.message);
      }
    },

    async deleteData(url) {
      console.log(url);
      setPostLoading(true);
      setError(null);
      try {
        const data = await DELETE(url);
        setPostLoading(false);
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
          this.getAllData();
        } else {
          setPostError(data.msg);
        }
      } catch {
        setLoading(false);
        setPostError(error.message);
      }
    },
  };

  const clear = () => {
    setLoading(false);
    setError("");
    setMessage("");
  };

  useEffect(() => {
    if (type?.includes("all")) {
      const fetched = sessionStorage.getItem(type);
      console.log("fetched", fetched);

      if (typeof fetched == "object" && fetched?.length > 0) {
        setAllData(fetched);
      } else {
        data.getAllData();
      }
    }

    if (type?.includes("one")) {
      data.getOneData(url);
    }

    if (type?.includes("one-in-session")) {
      data.getOneUrlInSessionData();
    }
  }, []);

  return {
    data,
    loading,
    allData,
    oneData,
    error,
    postError,
    postLoading,
    message,
    clear,
  };
};
