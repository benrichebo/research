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
    async getUserInSession() {
      const initializedUser = sessionStorage.getItem("initialized-user");
      const user = sessionStorage.getItem("user");

      if (user?.email || initializedUser?.email) {
        setUserData(user || initializedUser);
      }
    },
    async getCurrentUser() {
      setLoading(true);
      try {
        const data = await GET("/api/account");
        console.log("user", data);
        if (data.msg) {
          setError(data.msg);
        } else {
          if (data?._id) {
            sessionStorage.setItem("user", data);
            setUserData(data);
            setMessage("success");
          }
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
          sessionStorage.setItem("initial-user", data);
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
          sessionStorage.setItem("initial-user", data);
          this.getCurrentUser();
          setMessage("success");
          router?.push(`/dashboard/home/${data?._id}`);
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
          sessionStorage.setItem("initial-user", data);
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
      user.getUserInSession();

      if (!userData?.email) {
        user.getCurrentUser();
      }
    }
  }, []);

  return { user, userData, message, loading, error, clear };
};
