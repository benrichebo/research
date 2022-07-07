import { useEffect, useState } from "react";
import { GET } from "../functions/GET";
import { POST } from "../functions/POST";
import { PUT } from "../functions/PUT";
import { useStorage } from "./useStorage";

export const useCrud = (type, url) => {
  const { sessionStorage } = useStorage("session");

  const [allData, setAllData] = useState(null);
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
        if (data?.msg) {
          setError(data.msg);
        } else {
          sessionStorage.setItem(type, data);
          setAllData(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async getOneData(url) {
      setLoading(true);
      try {
        const data = await GET(url);
        if (data.msg) {
          setError(data.msg);
        } else {
          setOneData(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async addData(body, url) {
      setError("");
      setLoading(true);
      try {
        const data = await POST(body, url);
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
          this.getAllData();
        } else {
          setPostError(data.msg);
        }
      } catch (error) {
        setPostError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async updateData(body, url) {
      setLoading(true);
      try {
        const data = await PUT(body, url);
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
        } else {
          setError(data.msg);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async deleteData(url) {
      setLoading(true);
      const data = await DELETE(url);
      if (data.msg.includes("successfully")) {
        setMessage(data.msg);
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
    if (type.includes("all")) {
      const data = sessionStorage.getItem(type);
      if (!data) {
        data.getAllData();
      } else {
        setAllData(data);
      }
    }

    if (type == "one") {
      data.getData();
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
