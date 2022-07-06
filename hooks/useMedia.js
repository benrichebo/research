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
  const [error, setError] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [message, setMessage] = useState(null);

  const media = {
    async getMedias() {
      setLoading(true);
      try {
        const data = await GET("/api/media/images");
        if (!data?.media) {
          setError(data.msg);
        } else {
          sessionStorage.setItem("medias", data?.media);
          setMedias(data?.media);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async getMedia(id) {
      setLoading(true);
      try {
        const data = await GET(`/api/media/images/${id}`);
        if (!data.url) {
          setError(data.msg);
        } else {
          setMediaData(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async addMedia(credentials) {
      setUploadError("");
      setLoading(true);
      try {
        const data = await POST(credentials, "/api/media/images/create");
        if (data.url) {
          return data?.url;
        } else {
          setUploadError(data.msg);
        }
      } catch (error) {
        setUploadError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async updateMedia(id, credentials) {
      setLoading(true);
      try {
        const data = await PUT(credentials, `/api/media/images/${id}`);
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

    async deleteMedia(id) {
      setLoading(true);
      const data = await DELETE(`/api/media/images/${id}`);
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
    if (type == "medias") {
      const data = sessionStorage.getItem("medias");
      if (!data) {
        media.getMedias();
      } else {
        setMedias(data);
      }
    }

    if (type == "media") {
      const data = sessionStorage.getItem("media");
      if (!data) {
        media.getMedia();
      } else {
        setMedias(data);
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
    message,
    clear,
  };
};
