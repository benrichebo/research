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
  const [postError, setPostError] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  let [error, setError] = useState("");
  const [message, setMessage] = useState("");

  let user = {
    async getUserInSession() {
      setLoading(true);
      const initializedUser = sessionStorage.getItem("initialized-user");
      const user = sessionStorage.getItem("user");

      if (user?.email || initializedUser?.email) {
        setUserData(user || initializedUser);
        setLoading(false);
      } else {
        console.log(router);
        if (router?.asPath?.includes("dashboard")) {
          router?.push("/login");
          this.getCurrentUser();
        }
      }
    },

    async getCurrentUser() {
      setLoading(true);
      try {
        const data = await GET("/api/account");
        console.log("user", data);
        if (data.msg) {
          setLoading(false);
          setError(data.msg);
        } else {
          if (data?._id) {
            setLoading(false);
            sessionStorage.setItem("user", data);
            setUserData(data);
            setMessage("success");
            this.getUserInSession();
          }
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
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
          console.log("route to dashboard");
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
        console.log("login-data", data);
        if (data?.authToken) {
          sessionStorage.setItem("authToken", data?.authToken);
          sessionStorage.setItem("initial-user", data);
          await this.getCurrentUser();
          setMessage("success");
          router?.push(`/dashboard/home/${data?.id}`);
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
      setPostLoading(true);
      try {
        const data = await PUT(credentials, `/api/account`);
        if (data?.authToken) {
          sessionStorage.setItem("authToken", data?.authToken);
          sessionStorage.setItem("initial-user", data);
          setPostLoading(false);
          this.getCurrentUser();
          setMessage("success");
        } else {
          setPostError(data.msg);
          setPostLoading(false);
        }
      } catch (error) {
        setPostError(error.message);
        setPostLoading(false);
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
    }
  }, []);

  return {
    user,
    userData,
    message,
    loading,
    postLoading,
    error,
    postError,
    clear,
  };
};
