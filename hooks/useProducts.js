import { useEffect, useState } from "react";
import { GET } from "../functions/GET";
import { useStorage } from "./useStorage";

export const useProducts = (dataToFetch) => {
  const { sessionStorage } = useStorage();

  const [products, setProducts] = useState(null);
  const [productData, setProductData] = useState();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const product = {
    async getProducts() {
      setLoading(true);
      try {
        const data = await GET("/api/products");
        if (!data?.products) {
          setError(data.msg);
        } else {
          sessionStorage.setItem("products", data?.products);
          setProducts(data?.products);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async getProduct(id) {
      setLoading(true);
      try {
        const data = await GET(`/api/products/${id}`);
        if (!data.id) {
          setError(data.msg);
        } else {
          setProductData(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async addProduct(credentials) {
      setError("");
      setLoading(true);
      try {
        const data = await POST(credentials, "/api/products/create");
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
          this.getProducts();
        } else {
          setError(data.msg);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async updateProduct(id, credentials) {
      setLoading(true);
      try {
        const data = await PUT(credentials, `/api/products/${id}`);
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
          this.getProduct(id);
        } else {
          setError(data.msg);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async deleteProduct(id) {
      setLoading(true);
      const data = await DELETE(`/api/products/${id}`);
      if (data.msg.includes("successfully")) {
        setMessage(data.msg);
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
      } else {
        setError(data.msg);
      }
      setLoading(false);
    },
  };

  //check to see data to fetch
  useEffect(() => {
    //if data to fetch is shops
    if (dataToFetch == "products") {
      const data = sessionStorage.getItem("products");
      if (!data) {
        product.getProducts();
      } else {
        setProducts(data);
      }
    }
  }, []);

  return { product, productData, products, loading, error, message };
};
