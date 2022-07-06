import { useEffect, useState } from "react";
import { GET } from "../functions/GET";
import { POST } from "../functions/POST";
import { PUT } from "../functions/PUT";
import { useStorage } from "./useStorage";

export const useCategories = (type) => {
  const { sessionStorage } = useStorage("session");

  const [categories, setCategories] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [addCatError, setAddCatError] = useState(false);
  const [message, setMessage] = useState(null);

  const category = {
    async getCategories() {
      setLoading(true);
      try {
        const data = await GET("/api/categories");
        if (data?.msg) {
          setError(data.msg);
        } else {
          sessionStorage.setItem("categories", data);
          setCategories(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async getCategory(id) {
      setLoading(true);
      try {
        const data = await GET(`/api/categories/${id}`);
        if (data.msg) {
          setError(data.msg);
        } else {
          setCategoryData(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async addCategory(credentials) {
      setError("");
      setLoading(true);
      try {
        const data = await POST(credentials, "/api/categories/create");
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
          this.getCategories();
        } else {
          setAddCatError(data.msg);
        }
      } catch (error) {
        setAddCatError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async updateCategory(id, credentials) {
      setLoading(true);
      try {
        const data = await PUT(credentials, `/api/categories/${id}`);
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

    async deleteCategory(id) {
      setLoading(true);
      const data = await DELETE(`/api/categories/${id}`);
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
    if (type == "categories") {
      const data = sessionStorage.getItem("categories");
      if (!data) {
        category.getCategories();
      } else {
        setCategories(data);
      }
    }

    if (type == "category") {
      category.getCategory();
    }
  }, []);

  return {
    category,
    loading,
    categories,
    categoryData,
    error,
    addCatError,
    message,
    clear,
  };
};
