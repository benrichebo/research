import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GET } from "../functions/GET";
import { LOGIN } from "../functions/LOGIN";
import { PUT } from "../functions/PUT";
import { REGISTER } from "../functions/REGISTER";
import { useStorage } from "./useStorage";

export const useUser = (type) => {
  const router = useRouter();
  const { sessionStorage } = useStorage();

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  const [message, setMessage] = useState("");

  let user = {
    async getCurrentUser() {
      setLoading(true);
      try {
        const data = await GET("/api/account");
        console.log("user", data);
        if (data.msg) {
          setError(data.msg);
        } else {
          sessionStorage.setItem("user", data);
          setUserData(data);
          setMessage("success");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async signUpWithCredentials(credentials) {
      setLoading(true);
      try {
        const data = await REGISTER(credentials, "/api/account/create");
        if (data?.authToken) {
          sessionStorage.setItem("authToken", data?.authToken);
          await this.getCurrentUser();
          router?.push("/make-payment");
        } else {
          setError(data.msg);
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    },

    async loginWithEmailAndPassword(credentials) {
      setLoading(true);
      try {
        const data = await LOGIN(credentials, "/api/account/login");
        if (data?.authToken) {
          sessionStorage.setItem("authToken", data?.authToken);
          this.getCurrentUser();
          setMessage("success");
          router?.push("/dashboard/home");
        } else {
          setError(data.msg);
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    },

    signOut() {
      sessionStorage.clearSession();
      router?.push("/login");
    },

    async updateUser(credentials) {
      setLoading(true);
      try {
        const data = await PUT(credentials, `/api/account`);
        if (data?.authToken) {
          sessionStorage.setItem("authToken", data?.authToken);
          this.getCurrentUser();
          setMessage("success");
        } else {
          setError(data.msg);
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    },

    async resetUserPassword(credentials) {
      setLoading(true);
      try {
        const data = await PUT(credentials, "/api/account/reset-password");
        if (data?.authToken) {
          sessionStorage.setItem("authToken", data?.authToken);
          this.getUserInSession();
          setMessage("success");
        } else {
          setError(data.msg);
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    },
  };

  const clear = () => {
    setLoading(false);
    setError("");
    setMessage("");
  };

  useEffect(() => {
    if (type == "user") {
      const data = sessionStorage.getItem("user");
      if (!data) {
        user.getCurrentUser();
      } else {
        setUserData(data);
      }
    }
  }, []);

  return { user, userData, message, loading, error, clear };
};
