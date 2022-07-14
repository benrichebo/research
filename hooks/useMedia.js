import { useEffect, useState } from "react";
import { GET } from "../functions/GET";
import { POST } from "../functions/POST";
import { PUT } from "../functions/PUT";
import { useStorage } from "./useStorage";

export const useMedia = (type) => {
  const { sessionStorage } = useStorage("session");

  const [medias, setMedias] = useState(null);
  const [mediaData, setMediaData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [error, setError] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [message, setMessage] = useState(null);

  const media = {
    async getMedias() {
      setLoading(true);
      try {
        const data = await GET("/api/media/images");
        setLoading(false);
        if (data?.msg) {
          setError(data.msg);
        } else {
          if (data?.length > 0) {
            sessionStorage.setItem("medias", data);
            setMedias(data);
          }
        }
      } catch (error) {
        setError(error.message);
      }
    },

    async getMedia(id) {
      setLoading(true);
      try {
        const data = await GET(`/api/media/images/${id}`);
        setLoading(false);
        if (!data.url) {
          setError(data.msg);
        } else {
          setMediaData(data);
        }
      } catch (error) {
        setError(error.message);
      }
    },

    async addMedia(credentials) {
      setUploadError("");
      setUploadLoading(true);
      try {
        const data = await POST(credentials, "/api/media/images/create");
        setUploadLoading(false);
        if (data.url) {
          sessionStorage.clearItem(type);

          if (data?.length > 0) {
            this.getMedias();
            return data?.url;
          }
        } else {
          setUploadError(data.msg);
        }
      } catch (error) {
        setUploadError(error.message);
      }
    },

    async updateMedia(id, credentials) {
      setUploadLoading(true);
      try {
        const data = await PUT(credentials, `/api/media/images/${id}`);
        setUploadLoading(false);
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
        } else {
          setError(data.msg);
        }
      } catch (error) {
        setError(error.message);
      }
    },

    async deleteMedia(id) {
      setUploadLoading(true);
      const data = await DELETE(`/api/media/images/${id}`);
      setUploadLoading(false);
      if (data.msg.includes("successfully")) {
        setMessage(data.msg);
      } else {
        setError(data.msg);
      }
    },
  };

  const clear = () => {
    setLoading(false);
    setError("");
    setMessage("");
  };

  useEffect(() => {
    if (type == "medias") {
      const data = sessionStorage.getItem("medias");

      console.log("data", data);

      if (typeof data == "object" && data?.length > 0) {
        setMedias(data);
      } else {
        media.getMedias();
      }
    }

    if (type == "media") {
      const data = sessionStorage.getItem("media");
      if (!data?.url) {
        media.getMedia();
        console.log("still");
      } else {
        setMediaData(data);
      }
    }
  }, []);

  return {
    media,
    loading,
    medias,
    mediaData,
    error,
    uploadError,
    uploadLoading,
    message,
    clear,
  };
};
