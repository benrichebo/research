import { useEffect, useState } from "react";
import { DELETE } from "../functions/DELETE";
import { GET } from "../functions/GET";
import { POST } from "../functions/POST";
import { PUT } from "../functions/PUT";
import { useStorage } from "./useStorage";

export const useCrud = (type, url) => {
  const { sessionStorage } = useStorage("session");

  const [allData, setAllData] = useState([]);
  const [oneData, setOneData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [postError, setPostError] = useState(false);
  const [message, setMessage] = useState(null);

  const data = {
    async getAllData() {
      setLoading(true);
      try {
        const data = await GET(url);
        setLoading(false);
        console.log("data", data);
        if (data?.msg) {
          setError(data.msg);
        } else {
          sessionStorage.clearItem(type);
          if (data?.length > 0) {
            console.log("data2", data);
            sessionStorage.setItem(type, data);
            setAllData(data);
          }
        }
      } catch (error) {
        setError(error.message);
      }
    },

    async getOneData(url) {
      setLoading(true);
      try {
        const data = await GET(url);
        setLoading(false);
        if (data.msg) {
          setError(data.msg);
        } else {
          setOneData(data);
        }
      } catch (error) {
        setError(error.message);
      }
    },

    async addData(body, url) {
      setError("");
      setLoading(true);
      try {
        const data = await POST(body, url);
        setLoading(false);
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
          this.getAllData();
        } else {
          setPostError(data.msg);
        }
      } catch (error) {
        setPostError(error.message);
      }
    },

    async updateData(body, url) {
      setLoading(true);
      try {
        const data = await PUT(body, url);
        setLoading(false);
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
          this.getAllData();
        } else {
          setError(data.msg);
        }
      } catch (error) {
        setError(error.message);
      }
    },

    async deleteData(url) {
      console.log(url);
      setLoading(true);
      const data = await DELETE(url);
      if (data.msg.includes("successfully")) {
        setMessage(data.msg);
        this.getAllData();
      } else {
        setError(data.msg);
      }
      setLoading(false);
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
      if (!fetched) {
        data.getAllData();
      } else {
        setAllData(fetched);
      }
    }

    if (type?.includes("one")) {
      data.getOneData(url);
    }
  }, []);

  return {
    data,
    loading,
    allData,
    oneData,
    error,
    postError,
    message,
    clear,
  };
};
