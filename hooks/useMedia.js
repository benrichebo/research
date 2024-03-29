import { useEffect, useState } from "react";
import { DELETE } from "../functions/DELETE";
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
  const [imageUploadLoading, setImageUploadLoading] = useState(false);
  const [imageUploadError, setImageUploadError] = useState(false);
  const [error, setError] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [message, setMessage] = useState(null);

  const media = {
    async getMedias() {
      setError(false);
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
          } else {
            setMedias([]);
          }
        }
      } catch (error) {
        setLoading(false);
        setError("there was an error");
      }
    },

    async getMedia(id) {
      setLoading(true);
      setError(false);
      try {
        const data = await GET(`/api/media/images/${id}`);
        setLoading(false);
        if (!data.url) {
          setError(data.msg);
        } else {
          setMediaData(data);
        }
      } catch (error) {
        setLoading(false);
        setError("there was an error");
      }
    },

    async addMedia(credentials) {
      setImageUploadError("");
      setImageUploadLoading(true);
      try {
        const data = await POST(credentials, "/api/media/images/create");
        setImageUploadLoading(false);

        if (!data.url) {
          setImageUploadError(data.msg);
        } else {
          this.getMedias();
        }
      } catch (error) {
        setImageUploadLoading(false);
        setImageUploadError("there was an error");
      }
    },

    async updateMedia(id, credentials) {
      setUploadError("");
      setUploadLoading(true);
      setMessage("");
      try {
        const data = await PUT(credentials, `/api/media/images/${id}`);
        setUploadLoading(false);
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
        } else {
          setError(data.msg);
        }
      } catch (error) {
        setUploadLoading(false);
        setUploadError("there was an error");
      }
    },

    async deleteMedia(id) {
      setUploadLoading(true);
      setUploadError("");
      setMessage("")
      try {
        const data = await DELETE(`/api/media/images/${id}`);
        console.log("delete-data", data);
        setUploadLoading(false);
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
          this.getMedias();
          if (medias?.length == 0) {
            sessionStorage.clearItem("medias");
          }
        } else if (data.msg) {
          setUploadError(data.msg);
        } else {
          setUploadError("there was an error");
        }
      } catch (error) {
        setUploadLoading(false);
        setUploadError("There was an error");
      }
    },
  };

  const clear = () => {
    setLoading(false);
    setError("");
    setMessage("");
  };

  useEffect(() => {
    console.log(type)
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
    imageUploadLoading,
    imageUploadError,
    message,
    clear,
  };
};
